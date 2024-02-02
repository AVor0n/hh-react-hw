import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App.tsx';
import { SettingsProvider } from './contexts/SettingsContext.tsx';
import { ApiProvider } from './contexts/ApiContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </ApiProvider>
  </React.StrictMode>,
);
