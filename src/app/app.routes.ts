import { Routes } from '@angular/router';
import { LikesContentComponent } from './components/likes-content/likes-content.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { CityProfileComponent } from './pages/city-profile/city-profile.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/registerForm.component';

export const routes: Routes = [
  { path: 'likes', component: LikesContentComponent },
  { path: 'Login', component: LoginFormComponent },
  { path: 'Register', component: RegisterFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'city/:id', component: CityProfileComponent },
  { path: '**', component: NotFoundComponent },
];
