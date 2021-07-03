import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Services1Service} from '../services/services1.service';
import {ModelPage} from '../model/model.page';
import {NavController,AlertController,ToastController} from '@ionic/angular';
import * as firebase from 'firebase';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imgages:any=[{name:"أريان بابوخفيف",p:120}
  ,{name:"دهن مكس",p:80},{name:"عود كلمنتان",p:200},
  {name:"عود كمبودي",p:70},{name:"عود سومطري",p:135}]
userid:string;
iryan:any=[];
counter:number=1;
  constructor(private Service1:Services1Service ,
    private model:ModalController,
    private navCtrl:NavController,
    private alertCtrl:AlertController,
    private toastCtrl:ToastController) {
      firebase.auth().onAuthStateChanged((user)=>{
        if(user) {
          this.navCtrl.navigateForward(['/home']);
  
        } else
        this.navCtrl.navigateForward(['/home']);
      })
      this.userid=firebase.auth().currentUser.uid;

    }
    ngOnInit() {
   this.counter++;
    }
    login(){
      this.navCtrl.navigateForward(['/page1']);
    }
    signup(){
      this.navCtrl.navigateForward(["/signup"])
    }
    Check1(){
      this.alertCtrl.create({
        message:"أريان بابوخفيف",
        inputs:[{
          name:"wegh",
          type:"checkbox",
          label:"وقية",
          value:"أريان بابوخفيف"
        }],
        buttons:[{
          text:"اضافة الى السلة",handler:((data)=>{
            this.iryan=data;
            
            firebase.firestore().collection('online').add({
              iryan:this.iryan,
              price:"120",
              owner:this.userid

            })
          })

        }]
      }).then(aler=>{
        aler.present();
      })
    }
    Check2(){
      this.alertCtrl.create({
        message:"دهن مكس",
        inputs:[{
          name:"wegh",
          type:"checkbox",
          label:"وقية",
          value:"دهن مكس"
        }],
        buttons:[{
          text:"اضافة الى السلة",handler:((data)=>{
            this.iryan=data;
            
            firebase.firestore().collection('online').add({
              iryan:this.iryan,
              price:"80",
              owner:this.userid

            })
          })

        }]
      }).then(aler=>{
        aler.present();
      })
    }
    Check3(){
      this.alertCtrl.create({
        message:"عود كلمنتان",
        inputs:[{
          name:"wegh",
          type:"checkbox",
          label:"وقية",
          value:"عود كلمنتان"
        }],
        buttons:[{
          text:"اضافة الى السلة",handler:((data)=>{
            this.iryan=data;
            
            firebase.firestore().collection('online').add({
              iryan:this.iryan,
              price:"200",
              owner:this.userid

            })
          })

        }]
      }).then(aler=>{
        aler.present();
      })
    }
    Check4(){
      this.alertCtrl.create({
        message:"عود كمبودي",
        inputs:[{
          name:"wegh",
          type:"checkbox",
          label:"وقية",
          value:" عود كمبودي"
        }],
        buttons:[{
          text:"اضافة الى السلة",handler:((data)=>{
            this.iryan=data;
            
            firebase.firestore().collection('online').add({
              iryan:this.iryan,
              price:"70",
              owner:this.userid

            })
          })

        }]
      }).then(aler=>{
        aler.present();
      })
    }
    Check5(){
      this.alertCtrl.create({
        message:" عود سموطري",
        inputs:[{
          name:"wegh",
          type:"checkbox",
          label:"وقية",
          value:" عود سموطري"
        }],
        buttons:[{
          text:"اضافة الى السلة",handler:((data)=>{
            this.iryan=data;
            
            firebase.firestore().collection('online').add({
              iryan:this.iryan,
              price:"135",
              owner:this.userid

            })
          })

        }]
      }).then(aler=>{
        aler.present();
      })
    }
    logout(){
      firebase.auth().signOut().then(()=>{
      this.navCtrl.navigateForward(['/page1']);
      
      }).catch((err)=>{
      
      alert(err);
      
      
      })
      
      
        }

        moveGoogle(){
          this.navCtrl.navigateForward(['/page2']);
        }
        moveshow(){
this.navCtrl.navigateForward(['/page3']);
}
sigin (){
  this.navCtrl.navigateForward(['/page1']);
}
openModel(){
    
  this.model.create({
    component:ModelPage,
    cssClass:'Model'
  }).then(model=>{
    model.present();
  })
}
}