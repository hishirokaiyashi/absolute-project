import { ButtonType, IButton, IClassName } from '@/models/interfaces';
import Text from './Typography';
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
  type = ButtonType.BUTTON,
}: ButtonWithIconProps) => {
  return (
    <button type={type} className={className} onClick={action}>
      <Text as="span" size="buttonSecond">
        {children}
      </Text>
      <div>{icon}</div>
    </button>
  );
};

// export const ButtonWithDot = ({
//   children,
//   className,
//   action,
//   title = '',
//   type = ButtonType.BUTTON,
// }: IButton) => {
//   return (
//     <button type={type} className={className} onClick={action}>
//       <Text as="span" size="buttonSecond">
//         {title}
//       </Text>
//       {children}
//     </button>
//   );
// };
