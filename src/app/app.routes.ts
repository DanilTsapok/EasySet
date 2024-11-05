import { Routes } from '@angular/router';
import { LikesContentComponent } from './components/likes-content/likes-content.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { CityProfileComponent } from './pages/city-profile/city-profile.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterformComponent } from './components/register-form/registerform.component';

export const routes: Routes = [
  { path: 'likes', component: LikesContentComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterformComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: '**', component: NotFoundComponent },
];
