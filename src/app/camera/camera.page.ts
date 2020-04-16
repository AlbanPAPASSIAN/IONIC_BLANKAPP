import { Component, OnInit } from '@angular/core';
import { LocalData } from '../services/localdata';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  title = 'Apercu de la photo';
  imgData: string;

  constructor() { }

  ngOnInit() {
    this.imgData = LocalData.imgData;
  }
}
