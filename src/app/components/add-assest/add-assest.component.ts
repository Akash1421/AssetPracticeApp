import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AssestsService } from 'src/app/services/assests-service/assests.service';
import { EmployeeDetailService } from 'src/app/services/employee-detail/employee-detail.service';

@Component({
  selector: 'app-add-assest',
  templateUrl: './add-assest.component.html',
  styleUrls: ['./add-assest.component.css']
})
export class AddAssestComponent implements OnInit {

  addAssestForm:FormGroup;
  EmployeeList:any[] =[];

  constructor(
    private fb:FormBuilder,
    private assestService:AssestsService,
    private _dialogRef:MatDialogRef<AddAssestComponent>,
    private empService:EmployeeDetailService,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.addAssestForm = this.fb.group( 
      { 
        id:[''],
        name:['',[Validators.required]],
        manufacturer:['',[Validators.required]],
        modelnumber:['',[Validators.required,Validators.minLength(8)]],
        modelcategory:['',[Validators.required]],
        assignedto:['',[Validators.required]],
        cost:['',[Validators.required]],


      }
    )
    this.getEmployeeName();

   }

   getEmployeeName(){ 
    this.empService.getAllEmployees().subscribe((employees)=>{ 
      this.EmployeeList = employees.map(emp=>emp.fullName);
      console.log(this.EmployeeList);
    })
   }

   onSubmit() {

    if(this.addAssestForm.valid){ 
      //updating assest values
      if(this.data){ 
        this.assestService.updateAssest(this.data.id,this.addAssestForm.value).subscribe({
          next:()=>{ 
            alert("Assest detail updated");
            this._dialogRef.close(true);
          }, error:(err:any)=>{ 
            console.log(err);
          }
        })
      }else{ 
        //adding new assest
        this.assestService.addAssest(this.addAssestForm.value).subscribe({
          next:()=>{
            alert('Assest added successfully');
            this._dialogRef.close(true);
          },error:(err:any)=>{
            console.log(err);
          }
        })

      }

    }else{ 
      console.log("form invalid");
    }
    
    }

  ngOnInit(): void {
    if(this.data){ 
      this.addAssestForm.patchValue(this.data);
    }
  }

}
