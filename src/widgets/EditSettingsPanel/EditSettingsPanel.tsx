import { Chips, TextBox } from '../../components';
import { useSettings } from '../../contexts';
import * as styles from './EditSettingsPanel.module.css';

export const EditSettingsPanel = () => {
  const [settings, setSettings] = useSettings();

  return (
    <div className={styles.container}>
      <TextBox
        label="Логин пользователя"
        value={settings.login}
        onChange={login => setSettings({ ...settings, login })}
      />
      <TextBox
        label="Название репозитория"
        value={settings.repo}
        onChange={repo => setSettings({ ...settings, repo })}
      />
      <Chips
        placeholder="Список логинов для исключения"
        values={settings.blacklist}
        onChange={blacklist => setSettings({ ...settings, blacklist })}
        canBeDeleted={() => true}
      />
    </div>
  );
};
