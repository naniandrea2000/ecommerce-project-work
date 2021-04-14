import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.scss']
})
export class AggiungiComponent implements OnInit {

  authError:any;
  serie: any = {
      Immagine: "",
      Carosello1: "",
      Carosello2: "",
      Titolo: "",
      Trailer: "",
      Trama:""
  };
  
  constructor(private afAuth: AngularFireAuth,private db: AngularFirestore,private router:Router) { }

  ngOnInit(): void {
    
  }

  //INSERIMENTO UTENTI IN FIREBASE
  insertData(form){
    console.log(form);
    this.serie = {
      Immagine: form.Immagine,
      Carosello1: form.Carosello1,
      Carosello2: form.Carosello2,
      Genere: form.Genere,
      Titolo: form.Titolo,
      Trailer: form.Trailer,
      Trama: form.Trama
    }
    this.db.collection("/Film").add(this.serie);
  }

}
