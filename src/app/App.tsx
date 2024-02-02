import { useState } from 'react';
import { MainPanel } from '../widgets/MainPanel';
import { SettingsPanel } from '../widgets/EditSettingsPanel';
import './style.css';
import { useApi, useSettings } from '../contexts';
import { useAsync } from '../hooks';
import { ContributorsInfo } from '../widgets/ContributorsInfo';

export const App = () => {
  const { github } = useApi();
  const [settings] = useSettings();

  const [settingsVisible, setSettingsVisible] = useState(false);
  const toggleSettingsVisible = () => setSettingsVisible(visible => !visible);

  const getContributors = useAsync(async () => {
    const contributors = await github.getContributors(settings.login, settings.repo);
    return contributors.filter(({ login }) => !settings.blacklist.includes(login ?? ''));
  });

  return (
    <div className="app">
      <MainPanel
        onClickSettings={toggleSettingsVisible}
        onClickSearch={getContributors.request}
        loading={getContributors.isLoading}
      />

      {settingsVisible && <SettingsPanel />}
      {!!getContributors.error && <div>{getContributors.error}</div>}
      {getContributors.data && (
        <ContributorsInfo
          contributors={getContributors.data.map(user => ({
            login: user.login,
            url: user.html_url,
            avatarUrl: user.avatar_url,
          }))}
        />
      )}
    </div>
  );
};
