import { Persona } from '../../components';
import { User } from '../../types';
import * as styles from './ReviewerInfo.module.css';

interface ReviewerInfoProps {
  user: User;
}

export const ReviewerInfo = ({ user }: ReviewerInfoProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Ревью проведёт</h2>
      <Persona
        text={user.login ?? ''}
        avatar={user.avatarUrl}
        onClick={() => open(user.url)}
        tooltip="Открыть github профиль"
      />
    </div>
  );
};
