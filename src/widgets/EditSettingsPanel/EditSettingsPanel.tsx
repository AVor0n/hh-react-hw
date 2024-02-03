import { Chips, TextBox } from '@components';
import { useAppDispatch, useAppSelector } from '@hooks';
import { setBlacklist, setLogin, setRepo } from 'store';
import * as styles from './EditSettingsPanel.module.css';

export const EditSettingsPanel = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector(state => state.settings);

  return (
    <div className={styles.container}>
      <TextBox label="Логин пользователя" value={settings.login} onChange={login => dispatch(setLogin(login))} />
      <TextBox label="Название репозитория" value={settings.repo} onChange={repo => dispatch(setRepo(repo))} />
      <Chips
        placeholder="Список логинов для исключения"
        values={settings.blacklist}
        onChange={blacklist => dispatch(setBlacklist(blacklist))}
        canBeDeleted={() => true}
      />
    </div>
  );
};
