import { Component, Input, inject } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  loginService = inject(LoginService);

  constructor(private router: Router) {}

  @Input() username!: string;

  onLogout() {
    this.loginService.removeUserData();
    this.router.navigate(['/']);
  }
}
