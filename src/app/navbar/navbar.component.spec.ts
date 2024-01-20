import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let store: MockStore;
  let fixture: ComponentFixture<NavbarComponent>;
  let el: DebugElement;
  const initialState = {
    language: 'en',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideMockStore({ initialState }), provideAnimations()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 4 nav-menu elements', () => {
    let navMenuElements = el.queryAll(By.css('.nav-menu > li'));

    expect(navMenuElements.length).toBe(4);
  });

  it('should toggle mobile navbar on hamburger click', () => {
    const hamburger = fixture.debugElement.query(By.css('.hamburger'));

    expect(component.hamburgerActive).toBe(false);

    hamburger.triggerEventHandler('click', null);
    expect(component.hamburgerActive).toBe(true);

    hamburger.triggerEventHandler('click', null);
    expect(component.hamburgerActive).toBe(false);
  });

  it('should close mobile navbar on nav-menu item click', () => {
    component.hamburgerActive = true;
    const navMenuItem = fixture.debugElement.query(By.css('.nav-menu > li'));

    expect(component.hamburgerActive).toBe(true);

    navMenuItem.triggerEventHandler('click', null);
    expect(component.hamburgerActive).toBe(false);
  });
});
