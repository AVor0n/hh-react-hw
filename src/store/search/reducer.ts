import { AsyncState, User } from '@types';
import type { InferValueTypes } from '../store';
import * as actionCreators from './actions';

export type SearchActions = ReturnType<InferValueTypes<typeof actionCreators>>;

export type SearchState = {
  contributors: AsyncState<User[]>;
  reviewer: User | null;
};

const initialState: SearchState = {
  contributors: {
    data: null,
    error: null,
    isLoading: false,
  },
  reviewer: null,
};

export const searchReducer = (state = initialState, action: SearchActions): SearchState => {
  switch (action.type) {
    case 'SET_REVIEWER':
      return {
        ...state,
        reviewer: action.payload,
      };
    case 'LOAD_CONTRIBUTORS_REQUEST': {
      return {
        ...state,
        reviewer: null,
        contributors: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    }
    case 'LOAD_CONTRIBUTORS_SUCCESS': {
      return {
        ...state,
        contributors: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    }
    case 'LOAD_CONTRIBUTORS_ERROR': {
      return {
        ...state,
        contributors: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    }
    default:
      action satisfies never;
      return state;
  }
};
