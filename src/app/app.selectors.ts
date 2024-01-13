import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const selectFeatureState = createFeatureSelector<AppState>('app');

export const selectLanguage = createSelector(
  selectFeatureState,
  (state: AppState) => state.language
);
