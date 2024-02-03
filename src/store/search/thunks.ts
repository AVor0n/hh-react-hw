import { githubApi } from '@api';
import { AppDispatch, AppState } from '../store';
import { loadContributorsError, loadContributorsRequest, loadContributorsSuccess, setReviewer } from './actions';
import { User } from '@types';

export const loadContributors = (username: string, repo: string) => {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    dispatch(loadContributorsRequest());
    githubApi
      .getContributors(username, repo)
      .then(contributors => {
        const { settings } = getState();
        const userApiFormatToUserFormat = (userApi: (typeof contributors)[number]): User => ({
          url: userApi.url,
          login: userApi.login,
          avatarUrl: userApi.avatar_url,
        });

        const reviewers = contributors.filter(({ login }) => !settings.blacklist.includes(login ?? ''));
        dispatch(loadContributorsSuccess(reviewers.map(userApiFormatToUserFormat)));

        const randomReviewer = reviewers[Math.floor(Math.random() * reviewers.length)];
        dispatch(setReviewer(randomReviewer));
      })
      .catch(error => {
        const errorText = 'message' in error ? error.message : String(error);
        dispatch(loadContributorsError(errorText));
      });
  };
};
