import {
  Component,
  Input,
  EventEmitter,
  Output,
  AfterContentInit,
} from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterformComponent } from '../register-form/registerform.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LoginFormComponent, RegisterformComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @Input() loginFormActive!: boolean;
  @Input() registerFormActive!: boolean;
}
