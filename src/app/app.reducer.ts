import { createReducer, on } from '@ngrx/store';
import { setLanguage, toggleLanguage } from './app.actions';
import { Language } from '../shared-types';

export interface AppState {
  language: Language;
}

export const initialState: AppState = {
  language: 'en',
};

export const appReducer = createReducer(
  initialState,
  on(setLanguage, (state, { language }) => ({ language })),
  on(toggleLanguage, (state) => {
    if (state.language === ('pl' as Language))
      return { language: 'en' as Language };
    else return { language: 'pl' as Language };
  })
);
