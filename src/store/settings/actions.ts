export const setLogin = (payload: string) =>
  <const>{
    type: 'SET_LOGIN',
    payload,
  };

export const setRepo = (payload: string) =>
  <const>{
    type: 'SET_REPO',
    payload,
  };

export const setBlacklist = (payload: string[]) =>
  <const>{
    type: 'SET_BLACKLIST',
    payload,
  };
