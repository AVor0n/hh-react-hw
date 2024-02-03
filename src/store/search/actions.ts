import { User } from '@types';

export const setReviewer = (payload: User | null) =>
  <const>{
    type: 'SET_REVIEWER',
    payload,
  };

export const loadContributorsRequest = () =>
  <const>{
    type: 'LOAD_CONTRIBUTORS_REQUEST',
  };

export const loadContributorsSuccess = (payload: User[]) =>
  <const>{
    type: 'LOAD_CONTRIBUTORS_SUCCESS',
    payload,
  };

export const loadContributorsError = (payload: string) =>
  <const>{
    type: 'LOAD_CONTRIBUTORS_ERROR',
    payload,
  };
