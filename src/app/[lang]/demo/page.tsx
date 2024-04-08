import { IPageProps } from '@/models/interfaces';
import { getDictionary } from '../dictionaries/dictionaries';

export default async function Page({ params: { lang } }: IPageProps) {
  const dict = await getDictionary(lang); // en
  return <button>{dict.products.cart}</button>; // Add to Cart
}
