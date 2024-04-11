import { ReactNode } from 'react';
import { Locale } from '../i18n.config';

export interface IPageProps {
  params: {
    lang: Locale;
  };
}

export interface IDictionary {
  [key: string]: {
    [nestedKey: string]: string;
  };
}

export interface IClassName {
  className?: string;
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}
export interface IButton extends IClassName {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  action?: () => void;
}
export interface IListELementButtons {
  title?: string;
}

export interface ICursorDescription {
  description?: string;
}
