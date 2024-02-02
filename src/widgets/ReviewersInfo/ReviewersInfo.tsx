import { Persona } from '../../components';
import * as styles from './ReviewersInfo.module.css';

interface Reviewer {
  login?: string;
  url?: string;
  avatarUrl?: string;
}

interface ReviewersInfoProps {
  reviewers: Reviewer[];
}

export const ReviewersInfo = ({ reviewers }: ReviewersInfoProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Топ-100 контрибьюторов репозитория</h2>
      <div className={styles.reviewers}>
        {reviewers.map(({ login, url, avatarUrl }) => (
          <Persona key={login} text={login ?? ''} avatar={avatarUrl} onClick={() => window.open(url)} />
        ))}
        h
      </div>
    </div>
  );
};
