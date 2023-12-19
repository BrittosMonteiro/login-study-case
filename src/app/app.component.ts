import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'login-study-case';
  loginService = inject(LoginService);

  isLogged: boolean = false;

  constructor(private router: Router) {
    this.isLogged = this.loginService.isUserLogged();
    if (!this.isLogged) return;

    router.navigate(['/dashboard']);
  }
}
