import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-technologies-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './technologies-button.component.html',
  styleUrl: './technologies-button.component.scss',
  animations: [
    trigger('showTooltipAnimation', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'scaleY(0)',
        })
      ),
      state(
        'shown',
        style({
          opacity: 1,
          transform: 'scaleY(100%)',
        })
      ),
      transition('hidden <=> shown', [animate('0.3s')]),
    ]),
  ],
})
export class TechnologiesButtonComponent {
  @Input({ required: true, alias: 'technology-name' }) name!: string;
  @Input({ required: true, alias: 'technology-img-src' }) src!: string;
  @Input({ required: true, alias: 'technology-website-url' }) url!: string;

  imgAlt = `${this.name} Icon`;
  isHovered = false;

  handleMouseOver() {
    this.isHovered = true;
  }

  handleMouseLeave() {
    this.isHovered = false;
  }
}
