import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SerieFilmService } from 'src/app/services/serie-film.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-consigliati',
  templateUrl: './consigliati.component.html',
  styleUrls: ['./consigliati.component.scss']
})
export class ConsigliatiComponent implements OnInit {
  listaSerie:any;
  listaFilm :any;
  serieConsigliate: any = [];
  filmConsigliati: any = [];
  SeriePreferiteList:any=[];
  FilmPreferitiList:any = [];
  SeriepreferiteUtente:any = [];
  FilmPreferitiUtente: any = []
  user: firebase.User;
  genere:any = [];

  constructor(private seriesService:SerieFilmService,private afAuth: AngularFireAuth) {
  
  }

  ngOnInit(): void {
    this.getList();
    this.afAuth.authState
      .subscribe(user =>{
        console.log(user);
        this.user=user;
      })
      this.getSeriePreferiteUtente();
      this.getFilmPreferitiUtente();
     
  }

  getList() {
    this.seriesService.getSerieList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(serie => {
      this.listaSerie = serie;
      console.log(this.listaSerie);
    }); 
    this.seriesService.getFilmList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(film => {
      this.listaFilm = film;
      console.log(this.listaFilm);
    });
  }
  getSeriePreferiteUtente() {
    this.seriesService.getSeriePrefriteList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(preferiti => {
      this.SeriePreferiteList = preferiti;
      this.SeriePreferiteList.forEach(serie => {
        if(serie.utente==this.user.email)
          this.SeriepreferiteUtente.push(serie);
      });
      this.getSerieConsigliate();
      console.log(this.SeriepreferiteUtente);
    });
    
  }
  
  aggiungiSeriePreferito(key){
    this.seriesService.aggiungiSeriePreferita(key,this.user.email);
  }

  rimuoviSeriePreferito(key){
    let uid : any;
    this.SeriepreferiteUtente.forEach(preferiti => {
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
    this.SeriepreferiteUtente.forEach(preferiti => {
      if (preferiti.Serie === key){
        isPreferito=true;
      }
    });
    return isPreferito;
  }

  getFilmPreferitiUtente() {
    this.seriesService.getFilmPrefritiList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(preferiti => {
      this.FilmPreferitiList = preferiti;
      this.FilmPreferitiList.forEach(film => {
        if(film.utente==this.user.email)
          this.FilmPreferitiUtente.push(film);
      });
      this.getFilmConsigliati();
      console.log(this.FilmPreferitiUtente);
    });
  }
  
  aggiungiFilmPreferito(key){
    this.seriesService.aggiungiFilmPreferito(key,this.user.email);
  }

  rimuoviFilmPreferito(key){
    let uid : any;
    this.FilmPreferitiUtente.forEach(preferiti => {
      if (preferiti.Film === key){
        uid=preferiti.key;
      }
    });
    this.seriesService.rimuoviFilmPreferito(uid);
    //this.getPreferitiUtente();
    //window.location.reload();
  }

  filmTraPreferiti(key){
    let isPreferito = false;
    this.FilmPreferitiUtente.forEach(preferiti => {
      if (preferiti.Film === key){
        isPreferito=true;
      }
    });
    return isPreferito;
  }

  getSerieConsigliate(){
    this.serieConsigliate=[];
    console.log(this.listaSerie);
    this.SeriepreferiteUtente.forEach(preferite => {
       this.listaSerie.forEach(serie => {
         if(serie.key===preferite.Serie){
           this.genere.push(serie.Genere);
         }
       });
    });
    this.listaSerie.forEach(serie => {
      this.genere.forEach(genere => {
        if(serie.Genere===genere)
            this.serieConsigliate.push(serie);
      });
    });
    console.log(this.serieConsigliate);
  }

  getFilmConsigliati(){
    this.filmConsigliati=[];
    this.FilmPreferitiUtente.forEach(preferite => {
       this.listaFilm.forEach(film => {
         if(film.key===preferite.Film){
           this.genere.push(film.Genere);
         }
       });
    });
    this.listaFilm.forEach(film => {
      this.genere.forEach(genere => {
        if(film.Genere===genere)
            this.filmConsigliati.push(film);
      });
    });
    if(this.FilmPreferitiUtente.length==0 && this.SeriepreferiteUtente.length==0){
       this.filmConsigliati=this.listaSerie;
       this.serieConsigliate=this.listaFilm;
    }
  }
}



