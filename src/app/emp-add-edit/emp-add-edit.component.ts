import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { DataService } from '../data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { uniqueEmployeeValidator } from '../validators/custom-validators';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css'],
})
export class EmpAddEditComponent implements OnInit {
  employeeForm: FormGroup;
  employeeRoles: string[] = ['Admin', 'Manager', 'Developer', 'HR']; // Roles
  existingEmployees: any[] = []; 
  ManagerList:any[] =['phil']; 

   
 
 
  //constructor
  constructor(
    private fb: FormBuilder,
    private empService: DataService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.employeeForm = this.fb.group(
      {
        id: [''],
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        mail: ['', [Validators.required, Validators.email]],
        role: ['', Validators.required],
        experience: ['', Validators.required],
        contactNo: ['',[Validators.required, Validators.pattern(/^\d+$/), this.minDigitsLength(9)]],
        DateofJoining: ['', Validators.required], 
        ManagerLists:['']
      },
      {
        validators: uniqueEmployeeValidator(this.existingEmployees),
      }
    );
  }
 
    
  //outputing the required experience
  getMinExperience(): number {
    const role = this.employeeForm.get('role')?.value;
    switch (role) {
      case 'Developer':
        return 2;
      case 'HR':
        return 1;
      case 'Manager':
        return 5;
      case 'Admin':
        return 8;
      default:
        return 0;
    }
  } 
 
   
  
    

  //ngOnInit function
  ngOnInit(): void {
   
    this.empService.getEmployeeList().subscribe((employees) => { 
      
      this.existingEmployees = employees; 
      console.log(this.existingEmployees)
      this.employeeForm.setValidators(uniqueEmployeeValidator(this.existingEmployees));   
      this.ManagerList = this.existingEmployees.filter(emp => emp.role.includes('Manager')).map(emp => emp.fullName)  
    });
    
    
     
    
    if (this.data) {
      this.employeeForm.patchValue(this.data);
    }
  
    //dynamic validation code for roles and experience
    this.employeeForm.get('role')?.valueChanges.subscribe((role) => {
      const experienceControl = this.employeeForm.get('experience'); 
       
      
  
      if (role === 'Developer') {
        experienceControl?.setValidators([
          Validators.required,
          Validators.min(2), 
        ]); 
        
      } 
      else if (role === 'HR') {
        experienceControl?.setValidators([
          Validators.required,
          Validators.min(1), 
        ]);
      }  
      else if (role === 'Manager') {
        experienceControl?.setValidators([
          Validators.required,
          Validators.min(3), 
        ]);
      } 
      else if (role === 'Admin') {
        experienceControl?.setValidators([
          Validators.required,
          Validators.min(8),
        ]);
      } 
      else {
        experienceControl?.setValidators([Validators.required]);
        experienceControl?.setValue('');
      }
  
      experienceControl?.updateValueAndValidity(); 
      experienceControl?.markAsTouched(); 
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form Submitted:', this.employeeForm.value); // Debug log
      if (this.data) {
        // Update existing employee
        this.empService.updateEmployee(this.data.id, this.employeeForm.value).subscribe({
          next: () => {
            alert('Employee detail updated');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      } else {
        // Add new employee
        this.empService.addEmployee(this.employeeForm.value).subscribe({
          next: () => {
            alert('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    } else {
      console.error('Form is invalid!');
    }
  }

  minDigitsLength(minLength: number) {
    return (control: AbstractControl) => {
      const value = control.value?.toString() || '';
      return value.length >= minLength ? null : { minDigitsLength: true };
    };
  }
}