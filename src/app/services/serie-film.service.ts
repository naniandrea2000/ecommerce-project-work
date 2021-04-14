import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieFilmService {
  private dbPath = '/Serie';
  private dbPath2 = '/Film';
  private dbPath3 = '/FilmPreferito';
  private dbPath4 = '/SeriePreferita';

  seriesRef: AngularFirestoreCollection<any> = null;
  filmsRef: AngularFirestoreCollection<any> = null;
  filmsPrefritiRef: AngularFirestoreCollection<any> = null;
  seriePreferiteRef: AngularFirestoreCollection<any> = null;

  seriePreferita: any;

  constructor(private db: AngularFirestore) {
    this.seriesRef = db.collection(this.dbPath);
    this.filmsRef = db.collection(this.dbPath2);
    this.filmsPrefritiRef = db.collection(this.dbPath3);
    this.seriePreferiteRef = db.collection(this.dbPath4);
  }

  createSerie(serie: any): void {
    this.seriesRef.add({...serie});
  }

  updateSerie(key: string, value: any): Promise<void> {
    return this.seriesRef.doc(key).update(value);
  }

  deleteSerie(key: string): Promise<void> {
    return this.seriesRef.doc(key).delete();
  }

  getSerieList(): AngularFirestoreCollection<any> {
    console.log(this.seriesRef);
    return this.seriesRef;
  }

  createFilm(film: any): void {
    this.filmsRef.add({...film});
  }

  updateFilm(key: string, value: any): Promise<void> {
    return this.filmsRef.doc(key).update(value);
  }

  deleteFilm(key: string): Promise<void> {
    return this.filmsRef.doc(key).delete();
  }

  getFilmList(): AngularFirestoreCollection<any> {
    console.log(this.filmsRef);
    return this.filmsRef;
  }

  deleteAll() {
    this.seriesRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }

  aggiungiFilmPreferito(key, utente){
    this.seriePreferita = {
      Film : key,
      utente : utente
    }
    this.db.collection("/FilmPreferito").add(this.seriePreferita);
  }

  rimuoviFilmPreferito(key){
    this.filmsPrefritiRef.doc(key).delete();
  }

  getFilmPrefritiList(): AngularFirestoreCollection<any> {
    return this.filmsPrefritiRef;
  }

  aggiungiSeriePreferita(key, utente){
    this.seriePreferita = {
      Serie : key,
      utente : utente
    }
    this.db.collection("/SeriePreferita").add(this.seriePreferita);
  }

  rimuoviSeriePreferita(key){
    this.seriePreferiteRef.doc(key).delete();
  }

  getSeriePrefriteList(): AngularFirestoreCollection<any> {
    return this.seriePreferiteRef;
  }
}
