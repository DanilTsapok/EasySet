import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registerform.component.html',
  styleUrl: './registerform.component.scss',
})
export class RegisterformComponent {
  @Input() registerFormActive!: boolean;
}
