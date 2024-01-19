import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
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
  keyframes,
} from '@angular/animations';
import { ScrollService } from '../scroll.service';

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
    trigger('separateNavbar', [
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
    trigger('bar1Animation', [
      state('inactive', style({})),
      state(
        'active',
        style({
          transform: 'translateY(0.5rem) rotate(45deg)',
        })
      ),
      transition(
        'inactive => active',
        animate(
          '0.2s',
          keyframes([
            style({ transform: 'translateY(0)', offset: 0 }),
            style({ transform: 'translateY(0.5rem)', offset: 0.5 }),
            style({ transform: 'translateY(0.5rem) rotate(45deg)', offset: 1 }),
          ])
        )
      ),
      transition(
        'active => inactive',
        animate(
          '0.2s',
          keyframes([
            style({ transform: 'translateY(0.5rem) rotate(45deg)', offset: 0 }),
            style({ transform: 'translateY(0.5rem)', offset: 0.5 }),
            style({ transform: 'translateY(0)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('bar2Animation', [
      state(
        'inactive',
        style({
          opacity: 1,
        })
      ),
      state(
        'active',
        style({
          opacity: 0,
        })
      ),
      transition(
        'inactive => active',
        animate(
          '0.2s',
          keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: 0, offset: 0.5 }),
            style({ opacity: 0, offset: 1 }),
          ])
        )
      ),
      transition(
        'active => inactive',
        animate(
          '0.2s',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 0, offset: 0.5 }),
            style({ opacity: 1, offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('bar3Animation', [
      state('inactive', style({})),
      state(
        'active',
        style({
          transform: 'translateY(-0.5rem) rotate(-45deg)',
        })
      ),
      transition(
        'inactive => active',
        animate(
          '0.2s',
          keyframes([
            style({ transform: 'translateY(0)', offset: 0 }),
            style({ transform: 'translateY(-0.5rem)', offset: 0.5 }),
            style({
              transform: 'translateY(-0.5rem) rotate(-45deg)',
              offset: 1,
            }),
          ])
        )
      ),
      transition(
        'active => inactive',
        animate(
          '0.2s',
          keyframes([
            style({
              transform: 'translateY(-0.5rem) rotate(-45deg)',
              offset: 0,
            }),
            style({ transform: 'translateY(-0.5rem)', offset: 0.5 }),
            style({ transform: 'translateY(0)', offset: 1 }),
          ])
        )
      ),
    ]),
  ],
})
export class NavbarComponent {
  language$ = this.store.select(selectLanguage);
  hamburgerActive: boolean = false;
  pageScrolled: boolean = false;
  isMobile: boolean = true;
  md_breakpoint = 768;

  constructor(private store: Store, private scrollService: ScrollService) {}

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  ngOnInit() {
    this.isMobile = window.innerWidth < this.md_breakpoint;
  }

  toggleMobileNavbar() {
    this.hamburgerActive = !this.hamburgerActive;
  }

  handleNavOptionClick() {
    this.hamburgerActive = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.pageScrolled = scrollPosition > 0;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const windowWidth = window.innerWidth;

    this.isMobile = windowWidth < this.md_breakpoint;
  }
}
