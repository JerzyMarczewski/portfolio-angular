import { Component } from '@angular/core';
import { Language } from '../../shared-types';
import { Store } from '@ngrx/store';
import { selectLanguage } from '../app.selectors';
import { setLanguage, toggleLanguage } from '../app.actions';
import { AsyncPipe, NgClass } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [AsyncPipe, NgClass],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  animations: [
    trigger('toggleKnobAnimation', [
      state(
        'en',
        style({
          transform: 'translateX(-65%)',
          background: 'url(../../assets/gb.svg)',
          backgroundSize: 'contain',
        })
      ),
      state(
        'pl',
        style({
          transform: 'translateX(65%)',
          background: 'url(../../assets/pl.svg)',
          backgroundSize: 'contain',
        })
      ),
      transition('en => pl', animate('0.2s')),
      transition('pl => en', animate('0.2s')),
    ]),
    trigger('labelAnimation', [
      state(
        'hidden',
        style({
          opacity: 0,
        })
      ),
      state(
        'shown',
        style({
          opacity: 0.8,
        })
      ),
      transition('hidden <=> shown', animate('0.2s')),
    ]),
  ],
})
export class LanguageSwitcherComponent {
  language$ = this.store.select(selectLanguage);

  constructor(private store: Store) {}

  changeLanguage(language: Language) {
    this.store.dispatch(setLanguage({ language }));
  }

  toggleLanguage() {
    this.store.dispatch(toggleLanguage());
  }
}
