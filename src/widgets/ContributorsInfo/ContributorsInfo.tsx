import { Persona } from '@components';
import { User } from '@types';
import * as styles from './ContributorsInfo.module.css';

interface ContributorsInfoProps {
  contributors: User[];
}

export const ContributorsInfo = ({ contributors }: ContributorsInfoProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Топ-100 контрибьюторов репозитория</h2>
      <div className={styles.contributors}>
        {contributors.map(({ login, url, avatarUrl }) => (
          <Persona
            key={login}
            text={login ?? ''}
            avatar={avatarUrl}
            onClick={() => window.open(url)}
            tooltip="Открыть github профиль"
          />
        ))}
      </div>
    </div>
  );
};
