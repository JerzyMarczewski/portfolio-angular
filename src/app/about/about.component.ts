import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { selectLanguage } from '../app.selectors';
import { Store } from '@ngrx/store';
import { TechnologiesButtonComponent } from '../technologies-button/technologies-button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe, TechnologiesButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  language$ = this.store.select(selectLanguage);

  constructor(private store: Store) {}
}
