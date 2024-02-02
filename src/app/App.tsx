import { useState } from 'react';
import { MainPanel } from '../widgets/MainPanel';
import { SettingsPanel } from '../widgets/EditSettingsPanel';
import './style.css';
import { useApi, useSettings } from '../contexts';
import { useAsync } from '../hooks';

export const App = () => {
  const { github } = useApi();
  const [settings] = useSettings();

  const [settingsVisible, setSettingsVisible] = useState(false);
  const toggleSettingsVisible = () => setSettingsVisible(visible => !visible);

  const searchReviewers = useAsync(async () => {
    const allContributors = await github.getContributors(settings.login, settings.repo);
    return allContributors.filter(({ login }) => !settings.blacklist.includes(login ?? ''));
  });

  return (
    <div className="app">
      <MainPanel
        onClickSettings={toggleSettingsVisible}
        onClickSearch={searchReviewers.request}
        loading={searchReviewers.isLoading}
      />
      {settingsVisible && <SettingsPanel />}
      {!!searchReviewers.error && <div>{searchReviewers.error}</div>}
      {searchReviewers.data && <div> {searchReviewers.data.map(({ login }) => login).join(', ')}</div>}
    </div>
  );
};
