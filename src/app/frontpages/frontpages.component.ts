import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component'; 
import { DataService } from '../data.service'; 
import {MatPaginator} from '@angular/material/paginator'; 
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-frontpages',
  templateUrl: './frontpages.component.html',
  styleUrls: ['./frontpages.component.css']
})
export class FrontpagesComponent implements OnInit {
  //getting data from the json file
  displayedColumns: string[] = ['fullName', 'mail', 'role','experience','contactNo','DateofJoining','action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialog:MatDialog,private dataService:DataService) { }
 
  //Function is to add employee details(Form will popup from emp-add-edit component)
  addEditEmployeeForm(){ 
    const dialogRef = this._dialog.open(EmpAddEditComponent);  
    dialogRef.afterClosed().subscribe({ 
      next:(val)=>{ 
        if(val){ 
          this.getEmployeeData();
        }
      }
    })

  }
    
  //Function to get employee data  
  getEmployeeData(){ 
    this.dataService.getEmployeeList().subscribe({ 
      next:(res)=>{ 
        this.dataSource = new MatTableDataSource(res); 
        this.dataSource.paginator = this.paginator; 
        this.dataSource.sort = this.sort;
      }, 
      error : console.log
    })
  } 
   
  //Function to delete employee 
  deleteEmployee(id:number){ 
    this.dataService.deleteEmployee(id).subscribe({ 
      next:(res)=>{ 
        alert('employee deleted'); 
        this.getEmployeeData();
      }, 
      error:console.log
    })
  } 
   
  //Function to edit details 
  openEditDetails(data:any){ 
    const dialogRef = this._dialog.open(EmpAddEditComponent,{ 
      data
    }); 
    dialogRef.afterClosed().subscribe({ 
      next:(val)=>{ 
        if(val){ 
          this.getEmployeeData();
        }
      }
    })
  }
   
  
  ngOnInit(): void { 
  //  this.dataService.getData().subscribe((data)=>{ 
  //   this.dataSource=data; 
  //   console.log('Fetched Data:',data); 
  //  })  
  this.getEmployeeData();
   

  }  

} 

//getting data 
// {data:{
//   list:this.dataSource
// }}