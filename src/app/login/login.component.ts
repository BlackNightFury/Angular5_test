import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../service/auth.service';
import { error } from 'selenium-webdriver';
import { Md5 } from 'ts-md5/dist/md5';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss'
  ]
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public captcah: String = "";

  constructor(
    public router: Router,
    public fb: FormBuilder,
    private auth: AuthService
    ) { }

  ngOnInit() {
  
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSignin(){

    if(this.captcah != ""){
      var data = {
        "captcha": this.captcah,
        "username": this.form.value["username"],
        "password_md5": Md5.hashStr(this.form.value["password"])
      };
  
      this.auth.login(data).subscribe(
        res => {
          console.log(res);
          localStorage.setItem("xsrf-token", res.headers.get("x-xsrf-token"));
          localStorage.setItem("falcon-token", res.headers.get("x-falcon-token"));
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
          alert(error);
        }
      );
    }
    else {
      alert("Please confirm that you are not a robot!");
    }
    
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.captcah = captchaResponse;
  }
}