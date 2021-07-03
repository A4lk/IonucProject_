import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Services1Service} from '../services/services1.service';
import {ModelPage} from '../model/model.page';
import {NavController,ToastController} from '@ionic/angular';
import * as firebase from 'firebase';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
userid:string;
email:string;
password:string;
  constructor( private Service1:Services1Service ,
    private model:ModalController,
    private navCtrl:NavController,
    private toasCtrl:ToastController) {

      firebase.auth().onAuthStateChanged((user)=>{
        if(user) {
          this.navCtrl.navigateForward(['/home']);

        } else
        this.navCtrl.navigateForward(['/page1']);
      })
      
     }
    
  ngOnInit() {
   
  }
 
  methodlogin(){
    firebase.auth().signInWithEmailAndPassword(this.email,
      this.password).then(data=>{
        this.toasCtrl.create({
          message:"مرحبا بك في تطبيق نخبة العود"
          ,duration:2000,
          color:"success"
        }).then(toast=>{
          toast.present();
        }).then(a=>{
this.navCtrl.navigateForward(['/home']);
        })
      }).catch(error=>{
        this.toasCtrl.create({
          message:error.message,
          duration:3000,
          position:"middle",
          color:"danger"
        }).then(toast=>{
          toast.present();
        })
      })
    

    }
    methodsignup(){

      firebase.auth().createUserWithEmailAndPassword(this.email,
        this.password).then(data=>{
          this.toasCtrl.create({
            message:" مرحبا بك في تطبيق نخبة العود"
            ,duration:2000,
            color:"success"
          }).then(toast=>{
            toast.present();
          }).then(a=>{
            this.navCtrl.navigateForward(['/home']);
  
          })
        }).catch(error=>{
          this.toasCtrl.create({
            message:error.message,
            duration:3000,
            position:"middle",
            color:"danger"
          }).then(toast=>{
            toast.present();
          })
        })
      
  
    }
}
