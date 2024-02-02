import { Persona } from '../../components';
import * as styles from './ContributorsInfo.module.css';

interface Contributor {
  login?: string;
  url?: string;
  avatarUrl?: string;
}

interface ContributorsInfoProps {
  contributors: Contributor[];
}

export const ContributorsInfo = ({ contributors }: ContributorsInfoProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Топ-100 контрибьюторов репозитория</h2>
      <div className={styles.contributors}>
        {contributors.map(({ login, url, avatarUrl }) => (
          <Persona key={login} text={login ?? ''} avatar={avatarUrl} onClick={() => window.open(url)} />
        ))}
        h
      </div>
    </div>
  );
};
