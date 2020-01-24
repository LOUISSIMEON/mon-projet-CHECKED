import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
/*nom:string;
prenom:string;
motpass:any;
  onenregistrer(){

  }


  add() {
    this.afDB.list('User/').push({
      pseudo: 'drissas'
    });
  }
  oneffacer(){

  }*/
  connected: boolean;

  constructor( public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté: ' + auth.uid);
        this.connected = true;
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
     this.dataUser = {
       email: '',
       password: ''
     };
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  /*public afDB: AngularFireDatabase
  add() {
    this.afDB.list('User/').push({
      nom: 'simeon'
    });
  }*/

  dataUser = {
    email: '',
    password: ''
 };


}
