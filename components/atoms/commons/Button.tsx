import { IClassName } from '@/models/interfaces';
import { ReactNode } from 'react';
import Typography from './Typography';

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
  type = 'button',
}: ButtonWithIconProps) => {
  return (
    <button
      type={type}
      className="flex items-center justify-center uppercase group"
      onClick={action}
    >
      <Typography as="span" size="buttonSecond">
        {children}
      </Typography>
      <div className={className}>{icon}</div>
    </button>
  );
};
