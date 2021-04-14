import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { SerieFilmService } from 'src/app/services/serie-film.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-film',
  templateUrl: './cards-film.component.html',
  styleUrls: ['./cards-film.component.scss']
})
export class CardsFilmComponent implements OnInit {

  film: any;
  user: firebase.User;
  preferitiList:any = [];
  preferitiUtente:any = [];

  constructor(private filmsService:SerieFilmService,private loginService:LoginService,private afAuth: AngularFireAuth, private router:Router) {
  
  }

  ngOnInit(): void {
    this.getCustomersList();
    this.afAuth.authState
      .subscribe(user =>{
        console.log(user);
        this.user=user;
      })
      this.getPreferitiUtente();
  }

  getCustomersList() {
    this.filmsService.getFilmList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(film => {
      this.film = film;
      console.log(this.film);
    });
  }

  getPreferitiUtente() {
    this.filmsService.getFilmPrefritiList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(preferiti => {
      this.preferitiList = preferiti;
      this.preferitiList.forEach(film => {
        if(film.utente==this.user.email)
          this.preferitiUtente.push(film);
      });
      console.log(this.preferitiUtente);
    });
  }
  
  aggiungiFilmPreferito(key){
    this.filmsService.aggiungiFilmPreferito(key,this.user.email);
  }

  rimuoviFilmPreferito(key){
    let uid : any;
    this.preferitiUtente.forEach(preferiti => {
      if (preferiti.Film === key){
        uid=preferiti.key;
      }
    });
    this.filmsService.rimuoviFilmPreferito(uid);
    this.router.navigateByUrl("/home")
    //this.getPreferitiUtente();
    //window.location.reload();
  }

  filmTraPreferiti(key){
    let isPreferito = false;
    this.preferitiUtente.forEach(preferiti => {
      if (preferiti.Film === key){
        isPreferito=true;
      }
    });
    return isPreferito;
  }

}
