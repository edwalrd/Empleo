import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateFormatPipe } from 'angular2-moment';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.component.html',
  styleUrls: ['./empleo.component.css']
})
export class EmpleoComponent implements OnInit {


  public hoy =  new Date();
  
  constructor() { }

  ngOnInit(): void {

    console.log(this.hoy);
    
  }

}
