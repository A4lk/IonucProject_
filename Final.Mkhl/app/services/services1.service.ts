import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ModelPage } from '../model/model.page';

@Injectable({
  providedIn: 'root'
})
export class Services1Service {
  item:any;

Fname:string;
Lname:string;
phonenumber:number;
userid:string;
  constructor() {
    
    
   }
   ngOnInit() {}
  

  Add(){
    firebase.firestore().collection('online').add({

Fname:this.Fname,
Lname:this.Lname,
phonenumber:this.phonenumber,
owner:this.userid

    })
  }

}
