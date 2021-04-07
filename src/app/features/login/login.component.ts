import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: firebase.User;
  authError : any;

  constructor(private afAuth: AngularFireAuth,private service:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.afAuth.authState
      .subscribe(user =>{
        console.log(user);
        this.user=user;
      })
    
    this.service.eventAuthError$.subscribe(data =>{
      this.authError=data;
    })
    
  }

  loginUser(user){
    this.service.loginUser(user.value.email, user.value.password);
  }

  loginGoogle(){
    this.service.loginGoogle();
    this.router.navigateByUrl("/home");
  }

  loginFacebook(){
    this.service.FacebookAuth();
  }

  createUser(user){
    this.service.createUser(user.value);
  }

}
