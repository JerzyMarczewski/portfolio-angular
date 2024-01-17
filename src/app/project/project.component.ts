import { Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { selectLanguage } from '../app.selectors';
import { Store } from '@ngrx/store';
import { TechnologiesButtonComponent } from '../technologies-button/technologies-button.component';
import { allTechologies, Technology } from '../technologies';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [AsyncPipe, TechnologiesButtonComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  animations: [
    trigger('hoverAnimation', [
      state(
        'inactive',
        style({
          boxShadow: 'none',
        })
      ),
      state(
        'active',
        style({
          boxShadow: '-10px -50px 0px #FFBD59 inset',
        })
      ),
      transition('inactive => active', [animate('0.1s')]),
      transition('active => inactive', [animate('0.1s')]),
    ]),
  ],
})
export class ProjectComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) src!: string;
  @Input({ required: true, alias: 'desc-pl' }) descPL!: string;
  @Input({ required: true, alias: 'desc-en' }) descEN!: string;
  @Input({ required: true }) url!: string;
  @Input({ required: true, alias: 'technologies' })
  technologies!: Technology[];

  language$ = this.store.select(selectLanguage);
  isHovered = false;
  alt = `${this.name} preview`;

  constructor(private store: Store) {}

  handleMouseOver() {
    this.isHovered = true;
  }

  handleMouseLeave() {
    this.isHovered = false;
  }
}
