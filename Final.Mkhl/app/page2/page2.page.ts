import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {NavController} from '@ionic/angular';
import * as firebase from 'firebase';
import { ModalController } from '@ionic/angular';
import {ModelPage} from '../model/model.page';


declare var google;
@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
map:any;
lat:any;
lnt:any;
userid:any;
@ViewChild('mapElement',{static:true}) mapElement;
  constructor(private geolocation:Geolocation,
    private navCtrl:NavController,
    private model:ModalController) {
      
     // this.userid=firebase.auth().currentUser.uid
    }

  ngOnInit() {
  }
  
  ngAfterContentInit(){
    var mapOptions={
      center:{lat:24.5896837,lng:46.6716385}, 
      zoom:14,
      MapTypeId:google.maps.MapTypeId.SATELLITE,
      rotateControl:true
    }
    let ref=document.getElementById("mymap");
   
    this.map=new google.maps.Map(ref,mapOptions );
    this.addMarker();
  }
  addMarker(){
    const myicon={
      url:'assets/icon/icon1.png',
      scaledSize:new google.maps.Size(50, 50),}
  
    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter(),
    icon:myicon
    });
  
  
  
  /*
    let content = `<div>
    <img src=${this.myimage} width='200px' height='200px' /></br>
   <p>${this.address}</p>
   <button >Click Me</button>
   </div>`;          
    let infoWindow = new google.maps.InfoWindow({
    content: content
    });
    google.maps.event.addListener(marker, 'dblclick', () => {
     // this.getAddress();
    infoWindow.open(this.map, marker);
    
    });
  
    google.maps.event.addListener(infoWindow, 'dblclick', () => {
      
    
     
     });
  }
  /*
  GetLocation(){
  
    let watch=this.geolocation.getCurrentPosition().
    then((position)=>{
  
  this.lat=position.coords.latitude;
  this.lnt=position.coords.longitude;
    });
     
  
     
  */
  }
  
  
  movehome(){
    this.navCtrl.navigateForward(['/home'])
  }
  gotoMap(){
    this.navCtrl.navigateForward(['/page2']);
  }
  moveshow(){
this.navCtrl.navigateForward(['/page3']);
}

logout(){
  firebase.auth().signOut().then(()=>{
  this.navCtrl.navigateForward(['/page1']);
  
  }).catch((err)=>{
  
  alert(err);
  
  
  })
  
  
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

  
  
  