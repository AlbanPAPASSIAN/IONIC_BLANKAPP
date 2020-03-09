import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import User from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  title: string;
  private user: User;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.title = 'New title';
    this.user = this.loginService.login('1', 'mdp');
    console.log('\n\n Log: HomePage -> ngOnInit -> this.user', this.user);
  }

}
