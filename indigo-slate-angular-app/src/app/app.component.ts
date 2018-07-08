// This is the app component typecript file

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

// Import the JSON file
declare var require: any;
var jsonData = require('assets/app.json');

// Declare JSON constants
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  menuItems: any[];
  constructor() {}
// The ng on init function is called when this component is loaded into the view
ngOnInit() {}

  // Declare the JSON data names, image and video url's.
  dashboard = jsonData.dashboard;
  appTitleName = jsonData.appTitleName ;
  appDescriptionText = jsonData.appDescription;
  appParagraphText = jsonData.paragraph;
  backButtonText =  jsonData.backButton;
  playVideoButton = jsonData.playVideoButton;
  backgroundImage = jsonData.backgroundImage;
  videoURL = jsonData.videoURL;
  videoSoundFX = jsonData.videoSoundFX;
}

