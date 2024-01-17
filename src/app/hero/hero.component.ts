import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLanguage } from '../app.selectors';
import { AsyncPipe } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      state(
        'shown',
        style({
          opacity: 1,
        })
      ),
      transition('* => shown', animate('1s ease-in')),
    ]),
  ],
})
export class HeroComponent {
  language$ = this.store.select(selectLanguage);
  heroTextShown: boolean = false;

  constructor(private store: Store) {}

  ngOnInit() {
    this.heroTextShown = true;
  }
}
