import HomeTemplate from '@/components/templates/Home';
import { IPageProps } from '../../models/interfaces';

export default async function Home({ params: { lang } }: IPageProps) {
  // const dictionary = await getDictionary(lang);
  return <HomeTemplate />;
}
