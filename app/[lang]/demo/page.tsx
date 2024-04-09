import { getDictionary } from '../../../dictionaries/dictionaries';
import { IPageProps } from '../../../models/interfaces';

export default async function DemoPage({ params: { lang } }: IPageProps) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <h4 className="text-3xl font-bold underline text-red-600">
        Hello world!
      </h4>
    </>
  );
}
