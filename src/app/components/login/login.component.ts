import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  private Username = 'admin';
  private Password = 'password123';

  loginDetails:any[]=[];

  constructor(private fb: FormBuilder,private router:Router,private loginservice:LoginService,private _dialogRef:MatDialog) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginDetails
   }

  ngOnInit(): void {
    this.getAllLoginDetails();
   
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')!.value;
      const password = this.loginForm.get('password')!.value;

      const isValidUser = this.loginDetails.some(
        (user) => user.username === username && user.password === password
      );

      if (isValidUser) {
        // Navigate to the HomeComponent
        this.router.navigate(['/home']);
      } else {
        // Show an error message (you can use a snackbar or alert)
        alert('Invalid username or password');
      }
    }
  }
 
  getAllLoginDetails(){ 
    this.loginservice.getAllLoginDetails().subscribe(data=>{ 
      this.loginDetails=data;
      console.log(this.loginDetails);
    })
  }
  navigateTo(route: string): void {
    this._dialogRef.open(RegisterComponent)
   
  }



}


