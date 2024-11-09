import { Component, Input } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';

import { FooterComponent } from '../footer/footer.component';
import { CitiesComponent } from '../cities/cities.component';
import { RouterOutlet } from '@angular/router';
import { RegisterFormComponent } from '../register-form/registerForm.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    LoginFormComponent,
    RegisterFormComponent,
    FooterComponent,
    CitiesComponent,
    RouterOutlet,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @Input() loginFormActive!: boolean;
  @Input() registerFormActive!: boolean;
}
