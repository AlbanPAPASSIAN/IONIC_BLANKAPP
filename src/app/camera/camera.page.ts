import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalData } from '../services/localdata';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  title = 'Apercu de la photo';
  imgData: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.imgData = LocalData.imgData;
  }

  goBack() {
    window.history.back();
  }
}
