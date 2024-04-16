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

export interface IButton extends IClassName {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  action?: () => void;
}
export interface IListELementButtons {
  title: string;
}

export interface ICursorDescription {
  description?: string;
}

export interface IListElementSticky {
  id: string;
  src: string;
  cursorTitle: string;
  subTitle: string;
}

export interface ListTeamMember {
  src: string;
  srcNoBg: string;
  name: string;
  description: string[];
}
