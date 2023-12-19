import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IUserLogin } from '../userdata';
import { LoginService } from '../login.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  loginService = inject(LoginService);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onLoginSubmit() {
    this.loginService.setUserData(
      this.loginForm.value.username ?? '',
      this.loginForm.value.password ?? ''
    );
    this.router.navigate(['/dashboard']);
  }
}
