import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  
  newUser:any;
  
  constructor(private afAuth: AngularFireAuth,private db: AngularFirestore,private router:Router) { }

  //LOGIN UTENTE NORMALE
  loginUser(email:string,password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .catch(error =>{
        this.eventAuthError.next(error);
      })
      .then(userCredential =>{
        if(userCredential){
          this.router.navigateByUrl("/home")
        }
      })
  }
  
  //LOGIN EMAIL GOOGLE
  async loginGoogle(){
    await this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())  
  }

  getLoggedInUser(){
    return this.afAuth.authState;
  }

  //CREAZIONE UTENTI
  createUser(user){
    console.log("ciao")
    this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password)
      .then( userCredential =>{
        this.newUser=user

        userCredential.user.updateProfile({
          displayName: user.firstName + ' ' + user.lastName
        });
        
        this.insertUserData(userCredential)
          .then(()=>{
            this.router.navigateByUrl("/home");
        });

      })
      .catch(error =>{
        this.eventAuthError.next(error);
      })
  }

  //INSERIMENTO UTENTI IN FIREBASE
  insertUserData(userCredential:firebase.auth.UserCredential){
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      firstname: this.newUser.firstName,
      lastname: this.newUser.lastName,
      role: 'network user'
    })
  }

  //LOGOUT SIA GOOGLE CHE NORMALI
  logout() {
    this.afAuth.auth.signOut();
  }

  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }

  
}
