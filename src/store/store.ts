import { applyMiddleware, combineReducers, createStore } from 'redux';
import { settingsReducer } from './settings';
import { Settings } from '@types';
import { SearchState, searchReducer } from './search';
import { thunk } from 'redux-thunk';

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type AppState = {
  settings: Settings;
  search: SearchState;
};

export const configureStore = (initialState: Partial<AppState>) => {
  return createStore(rootReducer, initialState as object, applyMiddleware(thunk));
};

export const rootReducer = combineReducers({
  settings: settingsReducer,
  search: searchReducer,
});

export type AppDispatch = ReturnType<typeof configureStore>['dispatch'];
