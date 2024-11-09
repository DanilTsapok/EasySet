import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './registerForm.component.html',
  styleUrl: './registerForm.component.scss',
})
export class RegisterFormComponent {}
