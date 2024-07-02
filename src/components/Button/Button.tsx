import clsx from 'clsx';
import * as styles from './Button.module.css';

interface ButtonProps extends Partial<JSX.IntrinsicElements['button']> {
  /** Высота кнопки:
   * s - 20px
   * m - 24px
   * l - 32px
   * xl - 36px
   */
  size: 's' | 'm' | 'l' | 'xl';
  /** Растянуть кнопку по ширине контейнера,  */
  flex?: boolean;
  /** Тип кнопки
   * primary - цветная
   * ghost - бледная
   */
  buttonType?: 'primary' | 'ghost';
  /** Сделать кнопку круглой */
  circle?: boolean;
  /** Показать спиннер на кнопке */
  loading?: boolean;
}

export const Button = ({
  className,
  children,
  loading,
  disabled,
  circle,
  buttonType = 'primary',
  flex,
  size,
  ...props
}: ButtonProps) => {
  const classNames = clsx(
    className,
    styles.button,
    styles[size],
    styles[buttonType],
    flex && styles.wide,
    circle && styles.circle,
    (disabled ?? loading) && styles.disabled,
    loading && styles.loading,
  );

  return (
    <button type="button" className={classNames} disabled={loading || disabled} {...props}>
      {children}
    </button>
  );
};
