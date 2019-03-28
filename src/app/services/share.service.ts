import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from '../models/user.model';

@Injectable({providedIn : 'root'})
export class ShareService {
    uid = localStorage.getItem('uid');
    constructor(
        private db: AngularFireDatabase , 
        private snackBar :MatSnackBar ,
         public afAuth: AngularFireAuth ){

    }
    //create 
    createUsers( obj: User , uid: string  ){
        const itemsRef = this.db.object(`users/${uid}`); //  const itemsRef = this.db.list('users/nom'); pour ajouter l'arborescence 
        return itemsRef.set(obj);
    }
    //méthode login
    login(email : string , password: string ){
        // this.afAuth.auth.sendPasswordResetEmail pour celui qui a ounlié son mot de passe 
         return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
    // methode registrer 
    register(email : string , password: string ){
        // this.afAuth.auth.sendPasswordResetEmail pour celui qui a ounlié son mot de passe 
         return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }
    //méthode pour le snackbar 
    showMsg(message : string ){
        this.snackBar.open(message, 'close', {
            duration: 2000,
          });
    }
//methode update 
updateProfile(user : User){
    const itemRef = this.db.object(`users/${this.uid}`)
    return itemRef.update(user)
} 
}