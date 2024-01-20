import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact.component';
import { ScrollService } from '../scroll.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let store: MockStore;
  let fixture: ComponentFixture<ContactComponent>;
  const initialState = {
    language: 'en',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        provideMockStore({ initialState }),
        provideAnimations(),
        ScrollService,
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle mouse over for linkedin', () => {
    component.handleContactItemMouseOver('linkedin');
    expect(component.linkedInIsHovered).toBe(true);
  });

  it('should handle mouse leave for linkedin', () => {
    component.linkedInIsHovered = true;
    component.handleContactItemMouseLeave('linkedin');
    expect(component.linkedInIsHovered).toBe(false);
  });

  it('should handle mouse over for github', () => {
    component.handleContactItemMouseOver('github');
    expect(component.githubIsHovered).toBe(true);
  });

  it('should handle mouse leave for github', () => {
    component.githubIsHovered = true;
    component.handleContactItemMouseLeave('github');
    expect(component.githubIsHovered).toBe(false);
  });

  it('should handle mouse over for email', () => {
    component.handleContactItemMouseOver('email');
    expect(component.emailIsHovered).toBe(true);
  });

  it('should handle mouse leave for email', () => {
    component.emailIsHovered = true;
    component.handleContactItemMouseLeave('email');
    expect(component.emailIsHovered).toBe(false);
  });

  it('should handle mouse over for home', () => {
    const menuItem = 'home';
    component.handleMenuItemMouseOver(menuItem);
    expect(component.homeIsHovered).toBe(true);
  });

  it('should handle mouse leave for menu home', () => {
    const menuItem = 'home';
    component.homeIsHovered = true;
    component.handleMenuItemMouseLeave(menuItem);
    expect(component.homeIsHovered).toBe(false);
  });

  it('should handle mouse over for about', () => {
    const menuItem = 'about';
    component.handleMenuItemMouseOver(menuItem);
    expect(component.aboutIsHovered).toBe(true);
  });

  it('should handle mouse leave for menu about', () => {
    const menuItem = 'about';
    component.aboutIsHovered = true;
    component.handleMenuItemMouseLeave(menuItem);
    expect(component.aboutIsHovered).toBe(false);
  });

  it('should handle mouse over for projects', () => {
    const menuItem = 'projects';
    component.handleMenuItemMouseOver(menuItem);
    expect(component.projectsIsHovered).toBe(true);
  });

  it('should handle mouse leave for menu projects', () => {
    const menuItem = 'projects';
    component.projectsIsHovered = true;
    component.handleMenuItemMouseLeave(menuItem);
    expect(component.projectsIsHovered).toBe(false);
  });

  it('should handle mouse over for contact', () => {
    const menuItem = 'contact';
    component.handleMenuItemMouseOver(menuItem);
    expect(component.contactIsHovered).toBe(true);
  });

  it('should handle mouse leave for menu contact', () => {
    const menuItem = 'contact';
    component.contactIsHovered = true;
    component.handleMenuItemMouseLeave(menuItem);
    expect(component.contactIsHovered).toBe(false);
  });

  it('should scroll to a section', fakeAsync(() => {
    spyOn(component['scrollService'], 'scrollToSection');
    const sectionId = 'about';
    component.scrollToSection(sectionId);
    tick();
    expect(component['scrollService'].scrollToSection).toHaveBeenCalledWith(
      sectionId
    );
  }));
});
