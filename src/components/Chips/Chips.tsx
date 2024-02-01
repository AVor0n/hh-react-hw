import { InputField } from './components/InputField';
import { Chip } from '../Chilp';
import * as styles from './Chips.module.css';

interface ChipsProps {
  placeholder?: string;
  values: string[];
  canBeDeleted: (value: string) => boolean;
  onChange: (values: string[]) => void;
}

export const Chips = ({ values, onChange, canBeDeleted, placeholder }: ChipsProps) => {
  const onAddChip = (newValue: string) => {
    if (newValue === '') return;
    if (!values.includes(newValue)) {
      onChange([...values, newValue]);
    }
  };

  const onDeleteChip = (chipId: string) => {
    onChange(values.filter((val) => val !== chipId));
  };

  return (
    <div className={styles.container}>
      <div className={styles.chipsContainer}>
        {values.map((chipLabel) => (
          <Chip
            key={chipLabel}
            label={chipLabel}
            onDelete={canBeDeleted(chipLabel) ? () => onDeleteChip(chipLabel) : undefined}
          />
        ))}
      </div>
      <InputField placeholder={placeholder} onAdd={onAddChip} />
    </div>
  );
};
