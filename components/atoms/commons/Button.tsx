import { ButtonType, IButton } from '@/models/interfaces';
import React from 'react';

const Button = ({
  children,
  className,
  action,
  // TODO: use this inside component
  title = '',
  type = ButtonType.BUTTON,
}: IButton) => {
  return (
    <button className={className} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
