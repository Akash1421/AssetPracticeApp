import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  public registrationForm:FormGroup
  constructor(private fb:FormBuilder) {
    this.registrationForm=this.fb.group({ 
      firstname:[''],
      lastname:[''],
      dateofbirth:[''],
      gender:['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){ 

  }

}
