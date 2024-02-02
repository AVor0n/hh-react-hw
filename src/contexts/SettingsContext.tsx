import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';
import { Settings } from '../types';

interface Context {
  settings: Settings;
  setSettings: (settings: Settings) => void;
}

export const SettingsContext = createContext<Context>({
  settings: {
    repo: '',
    login: '',
    blacklist: [],
  },
  setSettings: () => {},
});

export const SettingsProvider = ({ children }: PropsWithChildren) => {
  const [settings, setSettings] = useState<Settings>({
    login: '',
    repo: '',
    blacklist: [],
  });

  const context = useMemo(() => ({ settings, setSettings }), [settings]);

  return <SettingsContext.Provider value={context}>{children}</SettingsContext.Provider>;
};

export const useSettings = (): [Context['settings'], Context['setSettings']] => {
  const context = useContext(SettingsContext);
  return [context.settings, context.setSettings];
};
