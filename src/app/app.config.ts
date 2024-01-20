import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { ScrollService } from './scroll.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'app', reducer: appReducer }),
    provideAnimations(),
    ScrollService,
  ],
};
