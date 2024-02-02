import { Chips, TextBox } from '../../components';
import { useSettings } from '../../contexts';
import * as styles from './EditSettingsPanel.module.css';

export const EditSettingsPanel = () => {
  const [settings, setSettings] = useSettings();

  return (
    <div className={styles.container}>
      <TextBox label="login" onChange={login => setSettings({ ...settings, login })} />
      <TextBox label="repo name" onChange={repo => setSettings({ ...settings, repo })} />
      <Chips
        placeholder="blacklist logins"
        values={settings.blacklist}
        onChange={blacklist => setSettings({ ...settings, blacklist })}
        canBeDeleted={() => true}
      />
    </div>
  );
};
