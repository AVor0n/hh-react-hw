import { useState } from 'react';
import * as styles from '../Chips.module.css';

interface InputFieldProps {
  placeholder?: string;
  onAdd: (value: string) => void;
}

export const InputField = ({ placeholder, onAdd }: InputFieldProps) => {
  const [value, setValue] = useState('');

  const onAddValue = (newValue: string) => {
    onAdd(newValue);
    setValue('');
  };

  return (
    <input
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={(event) => setValue(event.target.value)}
      onKeyUp={(event) => event.key === 'Enter' && onAddValue(value)}
      onBlur={() => onAddValue(value)}
    />
  );
};
