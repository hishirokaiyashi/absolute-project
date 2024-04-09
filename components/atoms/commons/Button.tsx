
import { ButtonType, IButton } from '@/models/interfaces';
import React from 'react';

const Button = ({
  children,
  className,
  action,
  title = '',
  type = ButtonType.BUTTON,
  ...props
}: IButton) => {
  return (
    <button className={className} onClick={action} {...props}>
      {children}
    </button>
  );
};

export default Button;
