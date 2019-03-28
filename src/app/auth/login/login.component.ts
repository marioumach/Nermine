import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { User } from 'src/app/models/user.model';

import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    hide = true;
    user : User= new User();
    loading = false ; 
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);
    constructor(private shareService: ShareService) { }

    ngOnInit(): void { }

    get isValid(): boolean{
        return this.email.invalid|| this.password.invalid ; 
    }
    //methode login 
  login(){
      this.loading = true ;
    const obj = {
      email : this.email.value,
      password : this.password.value 
    };
    this.shareService.login(obj.email, obj.password).then((data : any )=>{
    
     this.shareService.showMsg('user registred'); 
        console.log(data)
        localStorage.setItem('uid', data.user.uid);
        this.loading = false ; 
    }
    ) .catch(error=>{
      console.error(error.message);
      this.shareService.showMsg(error.message);
      this.loading = false 
 
    });
  }
  updateProfile(){
    const obj = {
        nom: 'ayadi ',
        prenom: 'nermine'
      };
    this.user= obj;
    this.shareService.updateProfile(this.user).then((data : any )=>{
    
     this.shareService.showMsg('user updated'); 
        console.log(data)
        localStorage.setItem('uid', data.user.uid);
    }
    ) .catch(error=>{
      console.error(error.message);
 
    });
  }
}
