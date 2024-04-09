import { getDictionary } from '../../dictionaries/dictionaries';
import { IPageProps } from '../../models/interfaces';

export default async function Home({ params: { lang } }: IPageProps) {
  const dictionary = await getDictionary(lang);


  return (
    <main>
      <p>{dictionary['common'].welcome}</p>
    </main>
  );
}
