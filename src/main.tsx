import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@app';
import { Provider } from 'react-redux';
import { configureStore } from 'store/store';
import { LocaleStorage } from '@utils';

const LS_SETTINGS_KEY = 'settings';

const store = configureStore({
  settings: LocaleStorage.get(LS_SETTINGS_KEY) ?? undefined,
});

let savingSettings = store.getState().settings;

store.subscribe(() => {
  const newSettings = store.getState().settings;
  if (savingSettings !== newSettings) {
    savingSettings = newSettings;
    LocaleStorage.set(LS_SETTINGS_KEY, newSettings);
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
