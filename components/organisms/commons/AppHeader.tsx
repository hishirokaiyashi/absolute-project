'use client';
import Button from '@/components/atoms/commons/Button';
import Text from '@/components/atoms/commons/Typography';
import DeleteIcon from '@/components/atoms/commons/icons/DeleteIcon';
import LightningIcon from '@/components/atoms/commons/icons/LightningIcon';
import clsx from 'clsx';
import { useState } from 'react';

const AppHeader = () => {
  // const ctx: IAppContext = useContext(AppContext) as IAppContext;
  const clsHeaderDefault = 'fixed w-full top-0 left-0 z-[10] lg:h-[78px] ';

  const [expandingMenu, setExpandingMenu] = useState(false);
  const [isHoverItem, setIsHoverItem] = useState('');

  return (
    <header
      id="header"
      className={clsx(
        clsHeaderDefault,
        expandingMenu && 'lg:h-screen  lg:px-0 lg:pt-0'
      )}
    >
      {!expandingMenu ? (
        <div className="flex items-center justify-between w-full h-full pt-[32px] px-aa-xl">
          <a href="/" className="font-cameraPlain">
            <Text cls="text-2xl lg:text-2xl">AA</Text>
          </a>
          <Button action={() => setExpandingMenu(true)}>
            {/* <div className="w-[25px] h-[25px] lg:w-[34px] lg:h-[34px]">÷ */}
            <LightningIcon className="w-[25px] h-[25px] lg:w-[34px] lg:h-[34px]" />
            {/* </div> */}
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full h-screen overflow-hidden bg-black px-aa-xl lg:px-aa-xxxl lg:py-aa-xl">
          <div className="w-full text-end">
            <Button action={() => setExpandingMenu(false)}>
              <DeleteIcon width={34} height={34} />
            </Button>
          </div>
          <ul className="flex flex-col justify-center w-full items-center lg:gap-40x pt-[94px]">
            <li onMouseOver={() => setIsHoverItem('/work')}>
              <a
                href="/work"
                className="flex items-center group gap-88x font-cameraPlain"
              >
                <LightningIcon className="" width={16} height={36} />
                <Text size="h3">WORK</Text>
                <LightningIcon width={16} height={36} />
              </a>
            </li>
            <li>
              <a
                href="/client"
                className="flex items-center group gap-88x font-cameraPlain"
              >
                <LightningIcon width={16} height={36} />
                <Text size="h3">CLIENT</Text>
                <LightningIcon width={16} height={36} />
              </a>
            </li>
            <li>
              <a
                href="/team"
                className="flex items-center group gap-88x font-cameraPlain"
              >
                <LightningIcon width={16} height={36} />
                <Text size="h3">TEAM</Text>
                <LightningIcon width={16} height={36} />
              </a>
            </li>
            <li>
              <a
                href="/mearch"
                className="flex items-center group gap-88x font-cameraPlain"
              >
                <LightningIcon width={16} height={36} />
                <Text size="h3">MERCH</Text>
                <LightningIcon width={16} height={36} />
              </a>
            </li>
          </ul>
          <ul className="pt-[103px] pb-[64px]">
            <li>
              <Text>+41 (0)71 221 14 80</Text>
            </li>
            <li>
              <Text>we@absolutagentur.ch</Text>
            </li>
          </ul>
          <Text>Zürcherstrasse 45 | 9000 St.Gallen | Switzerland</Text>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
