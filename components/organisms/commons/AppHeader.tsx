"use client";
import Button from "@/components/atoms/commons/Button";
import Text from "@/components/atoms/commons/Typography";
import DeleteIcon from "@/components/atoms/commons/icons/DeleteIcon";
import LightningIcon from "@/components/atoms/commons/icons/LightningIcon";
import clsx from "clsx";
import { useState } from "react";

const AppHeader = () => {
  // const ctx: IAppContext = useContext(AppContext) as IAppContext;
  const clsHeaderDefault =
    "fixed transition-all top-0 left-0 z-[10] lg:h-[78px] px-absoluteAgentur-xxl w-screen overflow-hidden";

  const [expandingMenu, setExpandingMenu] = useState(false);
  const [isHoverItem, setIsHoverItem] = useState("");

  return (
    <header
      id="header"
      className={clsx(clsHeaderDefault, expandingMenu && "lg:h-screen lg:px-0")}
    >
      {!expandingMenu ? (
        <div className="flex justify-between h-full w-full items-center">
          <a href="/" className="font-cameraPlain">
            <Text>AA</Text>
          </a>
          <Button action={() => setExpandingMenu(true)}>
            <LightningIcon width={34} height={34} />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col px-0 h-screen lg:px-absoluteAgentur-xxxl lg:py-absoluteAgentur-xl  bg-black overflow-hidden w-full items-center">
          <div className="lg:text-end w-full">
            <Button action={() => setExpandingMenu(false)}>
              <DeleteIcon width={34} height={34} />
            </Button>
          </div>
          <ul className="flex flex-col justify-center w-full items-center lg:gap-40x pt-[94px]">
            <li onMouseOver={() => setIsHoverItem("/work")}>
              <a
                href="/work"
                className="flex group items-center gap-88x font-cameraPlain"
              >
                <LightningIcon width={16} height={36} />
                <Text size="h3">WORK</Text>
                <LightningIcon width={16} height={36} />
              </a>
            </li>
            <li>
              <a
                href="/client"
                className="flex group items-center gap-88x font-cameraPlain"
              >
                <LightningIcon width={16} height={36} />
                <Text size="h3">CLIENT</Text>
                <LightningIcon width={16} height={36} />
              </a>
            </li>
            <li>
              <a
                href="/team"
                className="flex group items-center gap-88x font-cameraPlain"
              >
                <LightningIcon width={16} height={36} />
                <Text size="h3">TEAM</Text>
                <LightningIcon width={16} height={36} />
              </a>
            </li>
            <li>
              <a
                href="/mearch"
                className="flex group items-center gap-88x font-cameraPlain"
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
