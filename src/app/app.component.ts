import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  NgModule,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'EasySet';
  loginFormActive: boolean = false;
  registerFormActive: boolean = false;
  lang = ['ukr', 'en'];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    const lang = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang(lang);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  toggleLoginForm(): void {
    this.loginFormActive = !this.loginFormActive;
    if (this.loginFormActive) {
      this.registerFormActive = false;
    }
  }

  toggleRegisterForm(): void {
    this.registerFormActive = !this.registerFormActive;
    if (this.registerFormActive) {
      this.loginFormActive = false;
    }
  }
}
