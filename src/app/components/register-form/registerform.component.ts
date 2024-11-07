import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './registerform.component.html',
  styleUrl: './registerform.component.scss',
})
export class RegisterformComponent {}
