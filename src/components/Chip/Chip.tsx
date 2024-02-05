import * as styles from './Chip.module.css';

interface ChipProps {
  /** Текст отображаемый в чипсе */
  label: string;
  /** Обработчик удаления. Кнопка удаления появляется только если данный пропс имеет значение */
  onDelete?: () => void;
}

export const Chip = ({ label, onDelete }: ChipProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{label}</span>

      {onDelete && (
        <button className={styles.closeBtn} onClick={onDelete}>
          X
        </button>
      )}
    </div>
  );
};
