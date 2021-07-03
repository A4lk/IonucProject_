import { Component, OnInit } from '@angular/core';
import {Services1Service} from '../services/services1.service';
@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page implements OnInit {
type:string="Image";
images:any=[{name:"ddr",pic:"ddr5.jpg"},{name:"Computer",pic:"ipad.jpg"},{name:"Mobile",pic:"note20.jpg"},{name:"Football",pic:"tango.jpg"}];
  constructor(private Service1:Services1Service) { }

  ngOnInit() {
    
  }

}
