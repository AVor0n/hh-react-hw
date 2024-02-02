import { Button } from '../../components';
import * as styles from './MainPanel.module.css';

interface MainPanelProps {
  onClickSettings: () => void;
  onClickSearch: () => void;
}

export const MainPanel = ({ onClickSearch, onClickSettings }: MainPanelProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Find reviewer</h1>
      <Button size="xl" buttonType="ghost" onClick={onClickSettings}>
        Настройки
      </Button>
      <Button size="xl" onClick={onClickSearch}>
        Поиск
      </Button>
    </div>
  );
};
