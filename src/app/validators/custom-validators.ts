import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function minDigitsLength1(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value ? control.value.toString() : '';
    return value.length >= minLength
      ? null
      : { minlength: { requiredLength: minLength, actualLength: value.length } };
  };
} 
 
export function uniqueEmployeeValidator(existingEmployees:any[]):ValidatorFn{ 
  return (control:AbstractControl): ValidationErrors | null =>{ 
    const fullName = control.get('fullName')?.value; 
    const role = control.get('role')?.value; 
     
    const isDuplicate = existingEmployees.some( 
      (employee) => employee.fullname === fullName && employee.roles === role

    ); 
    return isDuplicate?{duplicateEmployee:true}:null;
  }
} 
 
export function validateSentence(contorl:AbstractControl){ 
  const abusiveWords=['fool','stupid','idiot','damn','bloddy'];  
  const sentence = contorl.value; 
  const wordsArr = sentence.split(" "); 
  let isClean = true 
  for(let word of wordsArr){ 
    
  }

}