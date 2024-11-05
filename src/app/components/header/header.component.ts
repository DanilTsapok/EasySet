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
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchInputComponent, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() loginFormActive!: boolean;
  @Input() registerFormActive!: boolean;
  @Output() toggleLoginEvent = new EventEmitter();
  @Output() toggleRegisterEvent = new EventEmitter();
  @Output() changeLanguageEvent = new EventEmitter<string>();
  animationState: string = 'inactive';
  selectedLanguage = localStorage.getItem('lang');
  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
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
