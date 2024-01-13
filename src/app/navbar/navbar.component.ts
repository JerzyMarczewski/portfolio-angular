import { Component } from '@angular/core';
import { Language } from '../../shared-types';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { selectLanguage } from '../app.selectors';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LanguageSwitcherComponent, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  language$ = this.store.select(selectLanguage);

  constructor(private store: Store) {}
}
