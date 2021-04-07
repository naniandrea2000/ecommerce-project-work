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

  seriesRef: AngularFirestoreCollection<any> = null;

  constructor(private db: AngularFirestore) {
    this.seriesRef = db.collection(this.dbPath);
  }

  createCustomer(serie: any): void {
    this.seriesRef.add({...serie});
  }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.seriesRef.doc(key).update(value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.seriesRef.doc(key).delete();
  }

  getCustomersList(): AngularFirestoreCollection<any> {
    console.log(this.seriesRef);
    return this.seriesRef;
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
}
