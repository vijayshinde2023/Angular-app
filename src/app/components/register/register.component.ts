import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit{
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      mobileNumber: ['', Validators.required],
    });
  }

  /*
 passwordsMatchValidator(control: FormControl): {[s: string]: boolean} {
   const form = control.parent;
    if (form && form.controls['passwo'] form.controls['password'].value !== control.value) {
      return {'passwordsNotMatch': true};
    }
    return null;
  }*/

  onSubmit(): void {
    // Handle form submission
  }
}