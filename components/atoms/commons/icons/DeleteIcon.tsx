import type { SVGProps } from "react";
const DeleteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1L23 23M23 1L1 23" stroke="#ECECEC" stroke-width="2" />
    </svg>
  );
};

export default DeleteIcon;
