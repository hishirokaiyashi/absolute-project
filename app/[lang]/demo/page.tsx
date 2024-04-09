import { getDictionary } from '../../../dictionaries/dictionaries';
import { IPageProps } from '../../../models/interfaces';

export default async function DemoPage({ params: { lang } }: IPageProps) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <p>{dictionary['common'].welcome}</p>
    </>
  );
}
