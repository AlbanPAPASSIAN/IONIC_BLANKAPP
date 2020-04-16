import { Component, OnInit, OnDestroy } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit, OnDestroy {

  title = 'Camera preview';
  picture: string;

  constructor(
    private cameraPreview: CameraPreview,
  ) { }

  ngOnInit() {
    this.previewPicture();
  }

  ngOnDestroy() {
    this.cameraPreview.stopCamera();
  }

  previewPicture() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: false,
      previewDrag: true,
      alpha: 1,
      toBack: true,
    };

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
