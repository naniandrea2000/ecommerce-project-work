import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  authError:any;
  
  constructor(private service:LoginService) { }

  ngOnInit(): void {
    this.service.eventAuthError$.subscribe( data =>{
      this.authError=data;
    })
  }

  createUser(user){
    this.service.createUser(user.value);
  }

}
