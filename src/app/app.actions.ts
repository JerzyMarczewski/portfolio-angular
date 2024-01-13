import { createAction, props } from '@ngrx/store';
import { Language } from '../shared-types';

export const setLanguage = createAction(
  '[App Component] Set Language',
  props<{ language: Language }>()
);
