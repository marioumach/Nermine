import { Component } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ShareService } from 'src/app/services/share.service';
import { registerContentQuery } from '@angular/core/src/render3';
import { User } from 'src/app/models/user.model';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls:['./inscription.component.scss']
})
export class InscriptionComponent  {
  user : User = new User;
  //firebase 
   constructor (private shareService : ShareService) {}
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  //methode login 
  login(){
    const obj = {
      email : 'nermine.ayadi15@gmail.com',
      password : '1234567'
    };
    this.shareService.login(obj.email, obj.password).then(()=>{
    
     this.shareService.showMsg('user registred'); 
 
    }
    ) .catch(error=>{
      console.error(error.message);
 
    });
  }
  //methode register
  register(){
    const obj = {
      email : 'nermine.ayadi15@gmail.com',
      password : '1234567'
    };
    this.shareService.register(obj.email, obj.password).then((data: any)=>{

      this.user.email = obj.email; 
      this.shareService.createUsers(this.user , data.user.uid).then(()=>{
        this.shareService.showMsg('user registred'); 
      });
    
     
 
    }
    ) .catch(error=>{
      console.error(error.message);
 
    });
  }
  //methode update profil 
  updateProfile(user : User, uid: string){
    
  }
 //create user 
//  createUser(obj: any , uid:string ){
   
//    this.shareService.createUsers(obj, uid).then(()=>{
//      //pour ajouter les snackbar ou bien je veu x ajouter n'importe quoi aprés la creation du user 
//     this.shareService.showMsg('user created '); 

//    }
//    ) .catch(error=>{
//      console.error(error.message);

//    });
   

//  }
//   matcher = new MyErrorStateMatcher();
// }
}
