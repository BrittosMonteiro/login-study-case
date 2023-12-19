import { Component, inject } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { IUserLogin } from '../userdata';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  loginService = inject(LoginService);
  userData!: IUserLogin;

  constructor(private router: Router) {
    this.userData = this.loginService.getUserData();
    if (this.userData.isLogged) return;

    router.navigate(['/']);
  }

  username!: string;

  onLogout() {
    this.loginService.removeUserData();
    this.router.navigate(['/']);
  }
}
