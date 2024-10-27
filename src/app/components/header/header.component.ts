import {
  Component,
  Input,
  EventEmitter,
  Output,
  AfterContentInit,
  HostListener,
} from '@angular/core';

import { SearchInputComponent } from './search-input/search-input.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchInputComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() loginFormActive!: boolean;
  @Input() registerFormActive!: boolean;
  @Output() toggleLoginEvent = new EventEmitter();
  @Output() toggleRegisterEvent = new EventEmitter();
  @Output() changeLanguageEvent = new EventEmitter<string>();
  animationState = 'inactive';

  changeLanguage(lang: string) {
    this.changeLanguageEvent.emit(lang);
  }
  toggleLogin() {
    this.animationState =
      this.animationState === 'active' ? 'inactive' : 'active';
    this.toggleLoginEvent.emit();
  }
  toggleRegister() {
    this.toggleRegisterEvent.emit();
  }
}
