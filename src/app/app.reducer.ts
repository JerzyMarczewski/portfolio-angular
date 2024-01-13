import { createReducer, on } from '@ngrx/store';
import { setLanguage } from './app.actions';
import { Language } from '../shared-types';

export interface AppState {
  language: Language;
}

export const initialState: AppState = {
  language: 'en',
};

export const appReducer = createReducer(
  initialState,
  on(setLanguage, (state, { language }) => ({ language }))
);
