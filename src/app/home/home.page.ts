import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LocalData } from '../services/localdata';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  title = 'Accueil';
  gelocData: { lat: number, lng: number, date: Date }[] = [];
  picture: string;

  constructor(
    private camera: Camera,
    private alertController: AlertController,
    private geolocation: Geolocation,
    private localNotifications: LocalNotifications,
    private router: Router,
  ) {

  }

  ngOnInit() {
    const watch = this.geolocation.watchPosition().pipe(filter((p) => p.coords !== undefined));
    watch.subscribe((data) => {
      this.gelocData.push({ lat: data.coords.latitude, lng: data.coords.longitude, date: new Date() });
    });
  }

  async fireAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    alert.onDidDismiss().then(() => console.log('alerte masquée'));

    await alert.present();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    this.camera.getPicture(options).then((imageData) => {
      LocalData.imgData = 'data:image/jpeg;base64,' + imageData;
      // this.router.navigate(['/camera']);
    }, (err) => {
      console.log('\n\n: HomePage -> takePicture -> err', err);
    });
  }

  sendNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Hello world !',
      text: 'Une super notification',
    });
  }
}
