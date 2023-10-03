import React from "react";
import iconsSprite from "../../assets/images/sprite.svg";

type IconsPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon: React.FC<IconsPropsType> = (props: IconsPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "50"}
      height={props.height || "50"}
      viewBox={props.viewBox || "0 0 50 50"}
      fill="none"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};
