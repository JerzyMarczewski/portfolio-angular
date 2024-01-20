import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { setLanguage } from './app.actions';

describe('AppComponent', () => {
  let store: MockStore;
  const initialState = {
    language: 'en',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);

    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should set language to polish if browser uses polish', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    spyOnProperty(window.navigator, 'languages').and.returnValue([
      'pl-PL',
      'en-US',
    ]);

    app.ngOnInit();

    expect(store.dispatch).toHaveBeenCalledWith(
      setLanguage({ language: 'pl' })
    );
  });

  it('should set language to english if browser uses english', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    spyOnProperty(window.navigator, 'languages').and.returnValue(['en-US']);

    app.ngOnInit();

    expect(store.dispatch).toHaveBeenCalledWith(
      setLanguage({ language: 'en' })
    );
  });
});
