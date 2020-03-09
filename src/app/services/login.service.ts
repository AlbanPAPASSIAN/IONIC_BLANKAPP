import { Injectable } from '@angular/core';
import User from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(id: string, password: string): User {
    return new User(id, 'Prénom', 'Nom', 'email@ynov.com');
  }

}
