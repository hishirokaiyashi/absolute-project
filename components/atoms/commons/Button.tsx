import { ReactNode } from 'react';
import Typography from './Typography';

interface ButtonWithIconProps {
  icon: ReactNode;
  children?: string;
  type?: 'button' | 'submit' | 'reset';
  action?: () => void;
}

export const ButtonWithIcon = ({
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
      {icon}
    </button>
  );
};
