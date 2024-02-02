import { useState } from 'react';
import { MainPanel } from '../widgets/MainPanel';
import { SettingsPanel } from '../widgets/EditSettingsPanel';
import './style.css';
import { useApi, useSettings } from '../contexts';
import { useAsync } from '../hooks';
import { ContributorsInfo } from '../widgets/ContributorsInfo';
import { User } from '../types';
import { ReviewerInfo } from '../widgets/ReviewerInfo';

export const App = () => {
  const { github } = useApi();
  const [settings] = useSettings();

  const [settingsVisible, setSettingsVisible] = useState(false);
  const toggleSettingsVisible = () => setSettingsVisible(visible => !visible);

  const [reviewer, setReviewer] = useState<User | null>(null);

  const getContributors = useAsync(async () => {
    setReviewer(null);
    const contributors = await github.getContributors(settings.login, settings.repo);
    const reviewers = contributors.filter(({ login }) => !settings.blacklist.includes(login ?? ''));

    const randomReviewer = reviewers[Math.floor(Math.random() * reviewers.length)];
    setReviewer(randomReviewer);
    return reviewers;
  });

  return (
    <div className="app">
      <MainPanel
        onClickSettings={toggleSettingsVisible}
        onClickSearch={getContributors.request}
        loading={getContributors.isLoading}
      />

      {settingsVisible && <SettingsPanel />}

      {!!getContributors.error && <div className="error">{getContributors.error}</div>}

      {getContributors.data && (
        <ContributorsInfo
          contributors={getContributors.data.map(user => ({
            login: user.login,
            url: user.html_url,
            avatarUrl: user.avatar_url,
          }))}
        />
      )}

      {reviewer && <ReviewerInfo user={reviewer} />}
    </div>
  );
};
