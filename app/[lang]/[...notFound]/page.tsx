import NotFoundTemplate from '@/components/templates/NotFound';
import { getDictionary } from '@/dictionaries/dictionaries';
import { IPageProps } from '@/models/interfaces';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404'
};

export default async function NotFound({ params: { lang } }: IPageProps) {
  const dictionary = await getDictionary(lang);
  return <NotFoundTemplate dictionary={dictionary} />;
}
