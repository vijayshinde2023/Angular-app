import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from 'src/app/classes/user';
import { LoginService } from 'src/app/services/login.service';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  user:User= new User(); 

  loginSection = new FormGroup({
    password: new FormControl('')

  });  

  constructor(private loginService:LoginService){

  }
  ngOnInit():void{

  }
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  userLogin(){
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data=>
      {
        alert("Login successfully")
      },error=>alert("sorry please enter correct UserEmail And Password "));
  }
}
