import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent, title: 'Login' },
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
];

export default routes;
