import {FC} from "react";

const PlayIcon: FC = () => {
  return (
    <svg width="80" height="80" viewBox="0 0 213.7 213.7">
      <polygon
        className="triangle"
        fill="none"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="73.5,62.5 148.5,105.8 73.5,149.1 "
      />
      <circle
        className="circle"
        fill="none"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        cx="106.8"
        cy="106.8"
        r="103.3"
      />
    </svg>
  );
};

export default PlayIcon;
