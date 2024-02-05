import { Button } from '@components';
import * as styles from './MainPanel.module.css';

interface MainPanelProps {
  onClickSettings: () => void;
  onClickSearch: () => void;
  loading: boolean;
}

export const MainPanel = ({ onClickSearch, onClickSettings, loading }: MainPanelProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Find reviewer</h1>
      <Button size="xl" buttonType="ghost" onClick={onClickSettings}>
        Настройки
      </Button>
      <Button size="xl" onClick={onClickSearch} loading={loading}>
        Поиск
      </Button>
    </div>
  );
};
