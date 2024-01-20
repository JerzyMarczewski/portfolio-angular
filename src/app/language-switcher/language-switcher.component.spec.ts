import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { toggleLanguage } from '../app.actions';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let store: MockStore;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;
  const initialState = {
    language: 'en',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSwitcherComponent],
      providers: [provideMockStore({ initialState }), provideAnimations()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch toggleLanguage action on handleToggleLanguage', () => {
    component.handleToggleLanguage();

    expect(store.dispatch).toHaveBeenCalledWith(toggleLanguage());
  });
});
