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
  BUTTON = 'BUTTON',
  SUBMIT = 'SUBMIT',
  RESET = 'RESET',
}
export interface IButton extends IClassName {
  children: ReactNode;
  type?: ButtonType;
  title?: string;
  action?: () => void;
}
