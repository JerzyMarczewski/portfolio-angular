import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ScrollService } from '../scroll.service';
import { selectLanguage } from '../app.selectors';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AsyncPipe, MatTooltipModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('raiseUp', [
      state(
        'notRaised',
        style({
          transform: 'translateY(0)',
        })
      ),
      state(
        'raised',
        style({
          transform: 'translateY(-20%)',
        })
      ),
      transition('notRaised <=> raised', [animate('0.2s')]),
    ]),
    trigger('fadeIn', [
      state(
        'faded',
        style({
          opacity: 0.7,
        })
      ),
      state(
        'unfaded',
        style({
          opacity: 1,
        })
      ),
      transition('faded <=> unfaded', [animate('0.3s')]),
    ]),
  ],
})
export class ContactComponent {
  language$ = this.store.select(selectLanguage);

  linkedInIsHovered = false;
  githubIsHovered = false;
  emailIsHovered = false;
  homeIsHovered = false;
  aboutIsHovered = false;
  projectsIsHovered = false;
  contactIsHovered = false;

  constructor(
    private scrollService: ScrollService,
    private store: Store,
    private clipboard: Clipboard
  ) {}

  handleContactItemMouseOver(contactItem: 'linkedin' | 'github' | 'email') {
    if (contactItem === 'linkedin') this.linkedInIsHovered = true;
    else if (contactItem === 'github') this.githubIsHovered = true;
    else this.emailIsHovered = true;
  }

  handleContactItemMouseLeave(contactItem: 'linkedin' | 'github' | 'email') {
    if (contactItem === 'linkedin') this.linkedInIsHovered = false;
    else if (contactItem === 'github') this.githubIsHovered = false;
    else this.emailIsHovered = false;
  }

  handleMenuItemMouseOver(menuItem: 'home' | 'about' | 'projects' | 'contact') {
    if (menuItem === 'home') this.homeIsHovered = true;
    else if (menuItem === 'about') this.aboutIsHovered = true;
    else if (menuItem === 'projects') this.projectsIsHovered = true;
    else this.contactIsHovered = true;
  }

  handleMenuItemMouseLeave(
    menuItem: 'home' | 'about' | 'projects' | 'contact'
  ) {
    if (menuItem === 'home') this.homeIsHovered = false;
    else if (menuItem === 'about') this.aboutIsHovered = false;
    else if (menuItem === 'projects') this.projectsIsHovered = false;
    else this.contactIsHovered = false;
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  copyToClipboard(text: string): void {
    this.clipboard.copy(text);
  }
}
