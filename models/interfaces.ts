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