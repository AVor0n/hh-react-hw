import { useState } from 'react';
import { MainPanel } from '../widgets/MainPanel';
import { SettingsPanel } from '../widgets/EditSettingsPanel';
import './style.css';

export const App = () => {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const toggleSettingsVisible = () => setSettingsVisible(visible => !visible);

  const searchReviewer = () => {};

  return (
    <div className="app">
      <MainPanel onClickSettings={toggleSettingsVisible} onClickSearch={searchReviewer} />
      {settingsVisible && <SettingsPanel />}
    </div>
  );
};
