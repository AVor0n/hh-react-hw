import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@app';
import { SettingsProvider, ApiProvider } from '@contexts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </ApiProvider>
  </React.StrictMode>,
);
