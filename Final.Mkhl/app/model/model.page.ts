import { Component, OnInit } from '@angular/core';
import {Services1Service} from '../services/services1.service';
import {NavController ,ToastController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-model',
  templateUrl: './model.page.html',
  styleUrls: ['./model.page.scss'],
})
export class ModelPage implements OnInit {
info:any;
userid:string;
  constructor( private Service1:Services1Service ,private navCtrl:NavController,
    private model:ModalController
    ,private toastCtrl:ToastController) { 
     /*
      firebase.auth().onAuthStateChanged((user)=>{
        if(user) {
          this.navCtrl.navigateForward(['/page2']);

        } else
        this.navCtrl.navigateForward(['/page1']);
      })
      */

     this.userid=firebase.auth().currentUser.uid;
     this.getInfo();

    }

  ngOnInit() {
  }
  cansel(){
    this.model.dismiss();
  }
  getInfo(){
    firebase.firestore().collection("online")
    .where("owner","==",this.userid)
    .onSnapshot((qs)=>{
   this.info=qs.docs;
   
    })
   
     }

     delete(document:firebase.firestore.QueryDocumentSnapshot){
    
      firebase.firestore().collection("online")
     .doc(document.id).delete();
    
  
    }
}
