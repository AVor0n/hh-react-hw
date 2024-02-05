import { InputHTMLAttributes } from 'react';
import * as styles from './TextBox.module.css';

type OmittedProps = 'onChange' | 'className' | 'placeholder';

interface TextboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  /** Описание поля */
  label: string;
  /** Обработчик изменения значения */
  onChange?: (value: string) => void;
}

export const TextBox = ({ label, onChange, ...props }: TextboxProps) => {
  return (
    <div className={styles.container}>
      <label>
        <input
          className={styles.input}
          placeholder={label}
          onChange={event => onChange?.(event.target.value)}
          {...props}
        />
        <div className={styles.label}>{label}</div>
      </label>
    </div>
  );
};
