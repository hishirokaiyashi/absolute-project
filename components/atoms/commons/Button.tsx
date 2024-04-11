import { ButtonType, IButton } from '@/models/interfaces';
import Text from './Typography';

export const ButtonWithIcon = ({
  className,
  action,
  children,
  type = ButtonType.BUTTON,
}: IButton) => {
  return (
    <button type={type} className={className} onClick={action}>
      {children}
    </button>
  );
};

export const ButtonWithDot = ({
  children,
  className,
  action,
  title = '',
  type = ButtonType.BUTTON,
}: IButton) => {
  return (
    <button type={type} className={className} onClick={action}>
      <Text as="span" size="buttonSecond">
        {title}
      </Text>
      {children}
    </button>
  );
};
