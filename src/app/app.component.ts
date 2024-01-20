import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { Store } from '@ngrx/store';
import { setLanguage } from './app.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private store: Store) {}

  ngOnInit() {
    this.setLanguageBasedOnBrowser();
  }

  setLanguageBasedOnBrowser() {
    const navigatorLanguages = navigator.languages;

    if (!navigatorLanguages.length)
      this.store.dispatch(setLanguage({ language: 'en' }));

    const language = navigatorLanguages[0].toLocaleLowerCase().substring(0, 2);

    if (language === 'pl') this.store.dispatch(setLanguage({ language: 'pl' }));
    else this.store.dispatch(setLanguage({ language: 'en' }));
  }
}
