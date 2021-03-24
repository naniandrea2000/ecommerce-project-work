import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: firebase.User;

  constructor(private afAuth: AngularFireAuth, private loginService : LoginService,private router:Router) {

  }

  ngOnInit() {
    this.afAuth.authState
      .subscribe(user =>{
        console.log(user);
        this.user=user;
      })
  }

  logoutGoogle(){
    this.loginService.logout();
    this.router.navigateByUrl("/login");
  }

}
