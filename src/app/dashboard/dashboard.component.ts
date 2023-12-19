import { Component, inject } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { IUserData, IUserLogin } from '../userdata';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  loginService = inject(LoginService);
  userData!: IUserData;

  constructor(private router: Router) {
    this.userData = this.loginService.getUserData();
    if (this.userData.isLogged) return;

    router.navigate(['/']);
  }
}
