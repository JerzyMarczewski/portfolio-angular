import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { Language } from '../../shared-types';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { selectLanguage } from '../app.selectors';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LanguageSwitcherComponent, AsyncPipe, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'void',
        style({
          transform: 'translate(-101%)',
        })
      ),
      state(
        'open',
        style({
          transform: 'translate(0%)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'translate(-101%)',
        })
      ),
      transition('open => closed', [animate('0.3s')]),
      transition('closed => open', [animate('0.3s')]),
    ]),
    trigger('separeteNavbar', [
      state(
        'separate',
        style({
          backgroundColor: '#ECEBF3',
          boxShadow: '0  2px 10px rgba(0, 0, 0, 0.3)',
        })
      ),
      state('unseparate', style({})),
      transition('* => *', [animate('0.3s')]),
    ]),
  ],
})
export class NavbarComponent {
  language$ = this.store.select(selectLanguage);
  hamburgerActive: boolean = false;
  pageScrolled: boolean = false;
  isMobile: boolean = true;

  constructor(private store: Store) {}

  ngOnInit() {
    this.isMobile = window.innerWidth < 720;
  }

  toggleMobileNavbar() {
    this.hamburgerActive = !this.hamburgerActive;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.pageScrolled = scrollPosition > 0;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const windowWidth = window.innerWidth;
    console.log(windowWidth);

    this.isMobile = windowWidth < 720;
  }
}
