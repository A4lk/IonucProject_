import { Component, OnInit } from '@angular/core';
import {Services1Service} from '../services/services1.service';
import {AlertController ,NavController} from "@ionic/angular";
import * as firebase from 'firebase';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {
item:any;
userid:string;

  constructor(private Service1:Services1Service,
    private alertCtrl:AlertController,
    private navCtrl:NavController) {
     
      firebase.auth().onAuthStateChanged((user)=>{
        if(user) {
          this.navCtrl.navigateForward(['/page3']);

        } else
        this.navCtrl.navigateForward(['/page3']);
      })
      this.userid=firebase.auth().currentUser.uid;
      
      this.getInfo();
     }

  ngOnInit() {
  }
  movetohome(){
    this.navCtrl.navigateForward(['/home']);
  }
  movetoGoogle(){
    this.navCtrl.navigateForward(['/page2'])
  }
  getInfo(){
    firebase.firestore().collection('online').
    where("owner","==",this.userid)
    .onSnapshot(us=>{
      this.item=us.docs;
    })
  }
delete(document:firebase.firestore.QueryDocumentSnapshot){
  this.alertCtrl.create({
    header:"هل تريد الحذف حقا ?"
  ,buttons:[{text:"الغاء"},{
    text:"نعم",handler:(()=>{
      firebase.firestore().collection("online")
      .doc(document.id).delete();
         })
  }]
  }).then((alert)=>{
    alert.present();
  })
}
updatephone(document:firebase.firestore.QueryDocumentSnapshot){
  this.alertCtrl.create({
    message:"هل تريد حقا للتحديث",
    buttons:[{text:"الغاء"},{
      text:"نعم",handler:(data=>{
        this.alertCtrl.create({
          message:"ادخل ملعوماتك",
          inputs:[{
            name:"phonenumber",
            type:"number",
            placeholder:"ادخل رقم الجوال"
          }],
          buttons:[{
            text:"حفظ",handler:(data=>{
            
              firebase.firestore()
              .collection("online")
              .doc(document.id)
              .update({phonenumber:data.phonenumber})
            })
          },{text:"الغاء"}]
        }).then(alert=>{
          alert.present();
        })
      })
      
    }]
  }).then(alert=>{
    alert.present();
  })
}
updatelname(document:firebase.firestore.QueryDocumentSnapshot){
  this.alertCtrl.create({
    message:"هل تريد حقا للتحديث",
    buttons:[{text:"الغاء"},{
      text:"نعم",handler:(data=>{
        this.alertCtrl.create({
          message:"Enter information",
          inputs:[{
            name:"Lname",
            type:"text",
            placeholder:"ادخل ثاني اسم"
          }],
          buttons:[{
            text:"حفظ",handler:(data=>{
            
              firebase.firestore()
              .collection("online")
              .doc(document.id)
              .update({Lname:data.Lname})
            })
          },{text:"الغاء"}]
        }).then(alert=>{
          alert.present();
        })
      })
      
    }]
  }).then(alert=>{
    alert.present();
  })
}
updatename(document:firebase.firestore.QueryDocumentSnapshot){
  this.alertCtrl.create({
    message:"هل تريد حقا للتحديث",
    buttons:[{text:"الغاء"},{
      text:"نعم",handler:(data=>{
        this.alertCtrl.create({
          message:"ادحل معلوماتك",
          inputs:[,{
            name:"Fname",
            type:"text",
            placeholder:"ادخل اول اسم"
          }],
          buttons:[{
            text:"حفظ",handler:(data=>{
            
              firebase.firestore()
              .collection("online")
              .doc(document.id)
              .update({Fname:data.Fname})
            })
          },{text:"الغاء"}]
        }).then(alert=>{
          alert.present();
        })
      })
      
    }]
  }).then(alert=>{
    alert.present();
  })
}
add(){
  this.alertCtrl.create({
    header:"مرحبا ,ادخل معلوماتك الشخصية",
    inputs:[{
      name:"Fname",
      type:"text",
      placeholder:"ادخل اول اسم"
    },
    { name:"Lname",
    type:"text",
    placeholder:"ادخل ثاني اسم"
  },{
      name:"phonenumber",
      type:"number",
      placeholder:"ادخل رقم الجوال"
    }],
    buttons:[{text:"الغاء"},{
      text:"حفظ",handler:(data=>{
       this.Service1.Fname=data.Fname;
       this.Service1.Lname=data.Lname;
       this.Service1.phonenumber=data.phonenumber;
       this.Service1.userid=this.userid;
       
this.Service1.Add();
      })
    }]
  }).then(alert=>{
    
    alert.present();
  })
}
getinfo(){
  this.Service1.item=this.item;

}
}
