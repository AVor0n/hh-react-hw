import { Settings } from '@types';
import type { InferValueTypes } from '../store';
import * as actionCreators from './actions';

export type SettingsActions = ReturnType<InferValueTypes<typeof actionCreators>>;

const initialState: Settings = {
  login: '',
  repo: '',
  blacklist: [],
};

export const settingsReducer = (state = initialState, action: SettingsActions): Settings => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        login: action.payload,
      };
    case 'SET_REPO':
      return {
        ...state,
        repo: action.payload,
      };
    case 'SET_BLACKLIST':
      return {
        ...state,
        blacklist: action.payload,
      };
    default:
      action satisfies never;
      return state;
  }
};
