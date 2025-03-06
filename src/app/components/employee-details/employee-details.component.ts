import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeDetailService } from 'src/app/services/employee-detail/employee-detail.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
//Variable for column header
displayedColumns:string[]=['id','fullName','mail','role','experience','contactNo','date_of_joining','Action'];
     
//variable to store data coming from spring boot application
employees:any[]=[];

constructor(private employeeService:EmployeeDetailService,private route:Router,private _dialogRef:MatDialog){  
//automatically calling the function when the component is loaded
this.getEmployees();
} 



 
//function to add employees
addEmployee(){ 
  const dialogRef = this._dialogRef.open(AddEmployeeComponent);
  dialogRef.afterClosed().subscribe({ 
    next:(val)=>{ 
      if(val){ 
        this.getEmployees();
      }
    
    }
  })
}
 
//function to get data from the spring application
getEmployees():void{ 
  this.employeeService.getAllEmployees().subscribe(data=>{ 
    this.employees = data; 
    console.log(this.employees)
  })
}

//function to delete employee
deleteEmployee(id:number){ 
  this.employeeService.deleteEmployee(id).subscribe({ 
    next:(res)=>{ 
      alert("Employee deleted");
      this.getEmployees();
    },
    error:console.log
  })
}

//function to update employee
  updateEmployee(data:any[]){ 
   this._dialogRef.open(AddEmployeeComponent,{data});
  }

  
ngOnInit(): void {  
 
  this.getEmployees()
 } 
}
