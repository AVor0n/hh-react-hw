import clsx from 'clsx';
import * as styles from './Persona.module.css';
import { useMemo } from 'react';
import { getPlaceholderAvatarUrl } from './utils';

interface PersonaProps {
  /** Отображаемый текст */
  text: string;
  /** Ссылка на изображение */
  avatar?: string;
  /** Обработчик нажатия */
  onClick?: () => void;
  /** Текст всплывающей подсказки */
  tooltip?: string;
}

export const Persona = ({ text, avatar, onClick, tooltip }: PersonaProps) => {
  const Tag = onClick ? 'button' : 'div';
  const classNames = clsx(styles.container, !!onClick && styles.interactive);
  const avatarUrl = useMemo(() => avatar || getPlaceholderAvatarUrl(text), [avatar, text]);

  return (
    <Tag className={classNames} onClick={onClick} title={tooltip}>
      <img className={styles.image} src={avatarUrl} alt="" />
      <span className={styles.text}>{text}</span>
    </Tag>
  );
};
