import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToSerie(){
    this.router.navigateByUrl("/serie")
  }

  goToFilm(){
    this.router.navigateByUrl("/film")
  }

  goToConsigliati(){
    this.router.navigateByUrl("/consigliati")
  }

  goToHome(){
    this.router.navigateByUrl("/home")
  }

  goToLogin(){
    this.router.navigateByUrl("/login")
  }


}
