import { Injectable, Input } from '@angular/core';
import { IUserData, IUserLogin } from './userdata';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  userData: IUserData = {
    username: '',
    isLogged: false,
  };

  updateUserData(data: IUserData) {
    localStorage.setItem('userData', JSON.stringify({ ...data }));
  }

  setUserData({ username, password }: IUserLogin) {
    if (!username || !password) return;
    this.userData.username = username;
    this.userData.isLogged = true;
    this.updateUserData(this.userData);
  }

  getUserData() {
    const storedUserData = localStorage.getItem('userData');
    const data: IUserData = storedUserData
      ? JSON.parse(storedUserData)
      : {
          username: '',
          isLogged: false,
        };
    this.userData = data;
    return this.userData;
  }

  removeUserData() {
    this.userData = {
      username: '',
      isLogged: false,
    };
    this.updateUserData(this.userData);
  }

  isUserLogged() {
    this.getUserData();
    return this.userData.isLogged;
  }
}
