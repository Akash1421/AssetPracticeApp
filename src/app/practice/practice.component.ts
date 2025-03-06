import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  myForm:FormGroup; 
  constructor(private fb:FormBuilder){ 
    this.myForm=this.fb.group({ 
      inputField:['',[Validators.required,Validators.minLength(3)]]
    })
  }
  

  ngOnInit(): void {  
   
   
  }
}
