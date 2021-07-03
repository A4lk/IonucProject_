import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
view:any;
  constructor(public http:HttpClient) { }
  weather:any;
  city:string;
  country:string;
  desc:string;
  cities:any="";
  img:string;
  temp:any;
  ngOnInit() {
    
  }
  

  getData(){
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.cities}&units=metric&appid=5fdb838aff6ca54fb3a89d51a451c3cd`)
    .subscribe((data)=>{
      console.log(data);
     
      this.weather=data;
      this.country=this.weather.sys.country;
      this.city=this.weather.name;
      this.desc=this.weather.weather[0].description;
    },(error)=>{
  console.log(error);
    });
    console.log(this.desc);
      }
  
  g(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((data)=>{
      console.log(data);
    this.view=data;
    },(error)=>{
    console.log(error);
    });
    
    }
}
