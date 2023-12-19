import { Injectable, Input } from '@angular/core';
import { IUserLogin } from './userdata';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  userData: IUserLogin = {
    username: '',
    password: '',
    isLogged: false,
  };

  updateUserData(data: IUserLogin) {
    localStorage.setItem('userData', JSON.stringify({ ...data }));
  }

  setUserData(username: string, password: string) {
    if (!username || !password) return;
    this.userData.username = username;
    this.userData.isLogged = true;
    this.updateUserData(this.userData);
  }

  getUserData() {
    const storedUserData = localStorage.getItem('userData');
    const data: IUserLogin = storedUserData
      ? JSON.parse(storedUserData)
      : {
          username: '',
          password: '',
          isLogged: false,
        };
    this.userData = data;
    return this.userData;
  }

  removeUserData() {
    this.userData = {
      username: '',
      password: '',
      isLogged: false,
    };
    this.updateUserData(this.userData);
  }

  isUserLogged() {
    this.getUserData();
    return this.userData.isLogged;
  }
}
