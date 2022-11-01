import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [//array
  {//login - 4200
    path: '', component: LoginComponent
  },
  {//dashboard - 4200/dashboard
    path: 'dashboard', component: DashboardComponent
  },
  {//register(signup) - 4200/register
    path: 'register', component: SignupComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
