import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  public registrationForm:FormGroup
  constructor(private fb:FormBuilder,private loginService:LoginService,private _dialogRef:MatDialogRef<RegisterComponent>) {
    this.registrationForm=this.fb.group({ 
      firstname:[''],
      lastname:[''],
      dateofbirth:[''],
      gender:[''],
      password:[''],
      confirmpassword:[''],
      username:[''],
      mobileno:['']
    })
   }



  ngOnInit(): void {
    
  }

  onSubmit(){ 
    this.loginService.addLoginDetail(this.registrationForm.value).subscribe({ 
        next:()=>{ 
          alert("registered successfully");
          this._dialogRef.close(true);
        }
    })
  }

}
