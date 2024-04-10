import type { SVGProps } from 'react';
const LightningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 16 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
    >
      <path
        d="M0 19.1396L12.9836 0L8.65574 14.8822H16L3.01639 34L7.34426 19.1333L0 19.1396Z"
        fill="#ECECEC"
      />
    </svg>
  );
};

export default LightningIcon;
