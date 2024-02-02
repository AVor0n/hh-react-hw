import { PropsWithChildren, createContext, useContext, useMemo } from 'react';
import { GithubApi } from '../api';

interface Context {
  github: GithubApi;
}

export const ApiContext = createContext<Context>({
  github: new GithubApi(),
});

export const ApiProvider = ({ children }: PropsWithChildren) => {
  const context = useMemo<Context>(
    () => ({
      github: new GithubApi(),
    }),
    [],
  );

  return <ApiContext.Provider value={context}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  return useContext(ApiContext);
};
