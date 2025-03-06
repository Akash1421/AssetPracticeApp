import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AssestsService } from 'src/app/services/assests-service/assests.service';
import { AddAssestComponent } from '../add-assest/add-assest.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-assests',
  templateUrl: './assests.component.html',
  styleUrls: ['./assests.component.css']
})
export class AssestsComponent implements OnInit {

  

//adding assest
addAssest() {
  const dialogRef = this._dialofRef.open(AddAssestComponent);

}

  assest:any[] =[];
  displayedColumns:string[] = ['name','manufacturer','modelnumber','modelcategory','assignedto','cost','Action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private assestService:AssestsService, private _dialofRef:MatDialog) { 
    this.getAllAssest();
   }

  ngOnInit(): void {
    

  }

  //getting all the assest from database
  getAllAssest(){ 
    this.assestService.getAllAssests().subscribe(data=>{ 
      this.assest = data;
      this.dataSource.data = this.assest; // Assign data to the dataSource
      this.dataSource.paginator = this.paginator; // Link paginator
      this.dataSource.sort = this.sort;
      console.log(this.assest);
    })
  }

  //deleting assest
  deleteAssest(id:number){ 
    this.assestService.deleteAssest(id).subscribe({ 
      next:(res)=>{ 
        alert("Assest deleted");
        this.getAllAssest();
      },
      error:console.log
    })
  }

  //updating assest through a form
  updateAssest(data:any){ 
    this._dialofRef.open(AddAssestComponent,{data});
    this.getAllAssest();
  }


  

}
