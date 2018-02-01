import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-router.module';
import { AuthService } from '../service/auth.service';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    RecaptchaModule.forRoot()
  ],
  declarations: [
    LoginComponent
  ],
  providers : [
    AuthService
  ]
})
export class LoginModule { }