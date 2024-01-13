import { Component } from '@angular/core';
import { Language } from '../../shared-types';
import { Store } from '@ngrx/store';
import { selectLanguage } from '../app.selectors';
import { setLanguage } from '../app.actions';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  language$ = this.store.select(selectLanguage);

  constructor(private store: Store) {}

  changeLanguage(language: Language) {
    this.store.dispatch(setLanguage({ language }));
  }
}
