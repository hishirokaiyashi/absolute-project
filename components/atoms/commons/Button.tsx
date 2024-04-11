import { ButtonType, IButton, IClassName } from '@/models/interfaces';
import Typography from './Typography';
import { ReactNode } from 'react';

interface ButtonWithIconProps extends IClassName {
  icon: ReactNode;
  children?: string;
  type?: 'button' | 'submit' | 'reset';
  action?: () => void;
}

export const ButtonWithIcon = ({
  className,
  action,
  icon,
  children,
  type = ButtonType.BUTTON
}: ButtonWithIconProps) => {
  return (
    <button type={type} className={className} onClick={action}>
      <Typography as="span" size="buttonSecond">
        {children}
      </Typography>
      <div>{icon}</div>
    </button>
  );
};
