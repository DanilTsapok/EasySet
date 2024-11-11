import {
  Component,
  Input,
  NgModule,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { reusableAnimation } from '../../reusableAnimation';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatCheckbox } from '@angular/material/checkbox';
@Component({
  selector: 'app-login-form',
  animations: [
    trigger('toggleState', [
      state(
        'inactive',
        style({
          opacity: 0.5,
          transform: 'scale(0.8)',
        })
      ),
      state(
        'active',
        style({
          opacity: 1,
          transform: 'scale(1)',
        })
      ),
      transition('inactive => active', [useAnimation(reusableAnimation)]),
      transition('active => inactive', [
        animate(
          '2s ease-in-out',
          style({
            opacity: 0.5,
            transform: 'scale(0.8)',
          })
        ),
      ]),
    ]),
  ],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, MatCheckbox],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  animationState = 'inactive';

  @Input() toggleState: any;
  toggleAnimation() {
    this.animationState =
      this.animationState === 'active' ? 'inactive' : 'active';
  }

  form: FormGroup;

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.form = this.fb.group({
      userDetails: this.fb.group({
        email: new FormControl('daniltest@gmail.com', [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('1234', [Validators.required]),
      }),
    });
  }

  updateFormData() {
    this.form.patchValue({
      userDetails: {
        email: 'newemail@example.com',
        password: 'newpassword',
      },
    });
  }
}
