import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RolesServiceService } from 'src/app/services/roles-service.service';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {


  addrolesForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private roleService:RolesServiceService,
    private _dialogRef:MatDialogRef<AddRolesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.addrolesForm = this.fb.group( 
      { 
        id:[''],
        name:['',[Validators.required,Validators.minLength(3)]],
        createdOn:['',[Validators.required]],
        description:['',[Validators.required]],
        elevatedPrivilage:['']
      }
    )
  }
  onSubmit():void { 
    if(this.addrolesForm.valid){ 
      //updating the role values
      if(this.data){ 
        this.roleService.updateRoles(this.data.id,this.addrolesForm.value).subscribe({ 
          next:()=>{ 
            alert("roles detail updated");
            this._dialogRef.close(true);
            
          },
          error:(err:any)=>{ 
            console.log(err);
          }
        })
      }else{ 
         //adding new role
    this.roleService.addRole(this.addrolesForm.value).subscribe({ 
      next:()=>{ 
        alert('roles added successfully');
        this._dialogRef.close(true);
      },
      error: (err: any) => {
        console.log(err);
      },
    })
    

      }
    }else{ 
      console.log("form invalid");
    }
   
  }

  ngOnInit(): void {
    if(this.data){ 
      this.addrolesForm.patchValue(this.data);
    }
  }

}
