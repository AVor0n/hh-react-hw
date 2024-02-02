import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';
import { Settings } from '../types';
import { LocaleStorage } from '../utils';

const LS_KEY = 'settings';

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
  const [settings, setSettings] = useState<Settings>(
    LocaleStorage.get(LS_KEY) || {
      login: '',
      repo: '',
      blacklist: [],
    },
  );

  const context = useMemo(
    () => ({
      settings,
      setSettings: (newSettings: Settings) => {
        LocaleStorage.set(LS_KEY, newSettings);
        setSettings(newSettings);
      },
    }),
    [settings],
  );

  return <SettingsContext.Provider value={context}>{children}</SettingsContext.Provider>;
};

export const useSettings = (): [Context['settings'], Context['setSettings']] => {
  const context = useContext(SettingsContext);
  return [context.settings, context.setSettings];
};
