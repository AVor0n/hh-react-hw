import { useState } from 'react';
import { ContributorsInfo, MainPanel, ReviewerInfo, SettingsPanel } from '@widgets';
import { useAppDispatch, useAppSelector } from '@hooks';
import { loadContributors } from 'store';
import './style.css';

export const App = () => {
  const dispatch = useAppDispatch();
  const {
    settings,
    search: { contributors, reviewer },
  } = useAppSelector(state => state);

  const [settingsVisible, setSettingsVisible] = useState(false);
  const toggleSettingsVisible = () => setSettingsVisible(visible => !visible);

  return (
    <div className="app">
      <MainPanel
        onClickSettings={toggleSettingsVisible}
        onClickSearch={() => dispatch(loadContributors(settings.login, settings.repo))}
        loading={contributors.isLoading}
      />

      {settingsVisible && <SettingsPanel />}
      {!!contributors.error && <div className="error">{contributors.error}</div>}
      {contributors.data && <ContributorsInfo contributors={contributors.data} />}
      {reviewer && <ReviewerInfo user={reviewer} />}
    </div>
  );
};
