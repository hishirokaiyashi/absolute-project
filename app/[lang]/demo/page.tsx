import { IPageProps } from '../../../models/interfaces';

export default async function DemoPage({ params: { lang } }: IPageProps) {
  // Comment out or remove redundancy
  // const dictionary = await getDictionary(lang);
  return (
    <>
      <h4 className="text-3xl font-bold text-red-600 underline">
        Hello world!
      </h4>
    </>
  );
}
