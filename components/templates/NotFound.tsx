
import { IDictionary } from '@/models/interfaces';
import Link from 'next/link';
import { memo } from 'react';

interface Props {
  dictionary: IDictionary;
}

const NotFoundTemplate = ({ dictionary }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100svh-53px)] w-full max-w-[740px] mx-auto overflow-hidden px-8 lg:min-h-[calc(100svh-65px)]">
      <div className="text-center">
        <h1 className="text-[100px] lg:text-[150px] font-black mb-5">404</h1>
        <h3 className="text-xl font-bold lg:text-[34px] lg:leading-snug mb-5 tracking-wide">
          {dictionary['not-found'].title}
        </h3>
        <div className="text-base lg:text-xl tracking-wide">
          {dictionary['not-found'].description}
        </div>
        <Link
          href={'/'}
          className="text-base inline-block  text-center py-2 px-5  transition-all mt-10 duration-500 hover:bg-black hover:text-white border-[2px] border-black rounded-full lg:text-xl"
        >
          {dictionary['not-found']['back-to-home']}
        </Link>
      </div>
    </div>
  );
};

export default memo(NotFoundTemplate);
