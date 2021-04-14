import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SerieFilmService } from 'src/app/services/serie-film.service';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-cards-serie',
  templateUrl: './cards-serie.component.html',
  styleUrls: ['./cards-serie.component.scss']
})
export class CardsSerieComponent implements OnInit {

  serie: any;
  preferitiList:any = [];
  preferitiUtente:any = [];
  user: firebase.User;

  constructor(private seriesService:SerieFilmService,private afAuth: AngularFireAuth) {
  
  }

  ngOnInit(): void {
    this.getFilmList();
    this.afAuth.authState
      .subscribe(user =>{
        console.log(user);
        this.user=user;
      })
      this.getPreferitiUtente();
    
  }

  getFilmList() {
    this.seriesService.getSerieList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(serie => {
      this.serie = serie;
      console.log(this.serie);
    }); 
  }
  getPreferitiUtente() {
    this.seriesService.getSeriePrefriteList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(preferiti => {
      this.preferitiList = preferiti;
      this.preferitiList.forEach(serie => {
        if(serie.utente==this.user.email)
          this.preferitiUtente.push(serie);
      });
      console.log(this.preferitiUtente);
    });
  }
  
  aggiungiSeriePreferito(key){
    this.seriesService.aggiungiSeriePreferita(key,this.user.email);
  }

  rimuoviSeriePreferito(key){
    let uid : any;
    this.preferitiUtente.forEach(preferiti => {
      if (preferiti.Serie === key){
        uid=preferiti.key;
      }
    });
    this.seriesService.rimuoviSeriePreferita(uid);
    //this.getPreferitiUtente();
    //window.location.reload();
  }

  serieTraPreferiti(key){
    let isPreferito = false;
    this.preferitiUtente.forEach(preferiti => {
      if (preferiti.Serie === key){
        isPreferito=true;
      }
    });
    return isPreferito;
  }
}
