import HomeTemplate from '@/components/templates/Home';
import { getDictionary } from '../../dictionaries/dictionaries';
import { IPageProps } from '../../models/interfaces';
import DefaultLayout from '@/components/layouts/DefaultLayout';

export default async function Home({ params: { lang } }: IPageProps) {
  const dictionary = await getDictionary(lang);
  return (
    <DefaultLayout>
      <HomeTemplate />
    </DefaultLayout>
  );
}
