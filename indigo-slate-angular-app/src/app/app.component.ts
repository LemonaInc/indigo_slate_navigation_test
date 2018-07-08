
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

declare var require: any;
var jsonData = require('assets/app.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  menuItems: any[];
  constructor() {}
ngOnInit() {}
  pnw = jsonData.pnw;
  westCoast = jsonData.westCoast;
  eastCoast = jsonData.eastCoast;
  mountains = jsonData.mountains;
  deserts = jsonData.deserts;
  praries = jsonData.praries;
  videoURL = jsonData.videoURL; 
}

