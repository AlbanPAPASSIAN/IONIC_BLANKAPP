import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginInfo: { username: string, password: string } = { username: '', password: '' };

  constructor(
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  async onFormValidate() {
    if (!this.loginInfo.username || !this.loginInfo.password) {
      const alert = await this.alertController.create({
        message: 'Veuillez saisir un identifiant et un mot de passe',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      console.log(this.loginInfo);
    }
  }

}
