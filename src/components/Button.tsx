import React, { FC } from "react";

type ButtonTypes = {
  text: string | React.ReactNode;
  active?: boolean;
  solidBG?: boolean;
  textWrap?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "submit";
  iconPosition?: "left" | "right";
  buttonRef?: React.MutableRefObject<any>;
  buttonLevel?: "primary" | "secondary" | "tertiary";
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const PRIMARY_BUTTON_DEFAULT =
  "bg-blue-600 text-white px-6 py-4 rounded-md hover:bg-blue-700";
const PRIMARY_BUTTON_DISABLED =
  "bg-blue-600 text-white px-6 py-4 rounded-md opacity-50 cursor-not-allowed";
const SECONDARY_BUTTON =
  "bg-white border border-blue-600 text-blue-600 px-6 py-4 rounded-md hover:bg-gray-50";
const TERTIARY_BUTTON = "hover:bg-gray-100 text-blue-600 px-6 py-4 rounded-md";

export const Button: FC<ButtonTypes> = ({
  text,
  iconPosition,
  disabled,
  buttonLevel,
  children,
  onClick,
  ...otherProps
}) => {
  let classNameToggle = !disabled
    ? PRIMARY_BUTTON_DEFAULT
    : PRIMARY_BUTTON_DISABLED;

  if (buttonLevel === "secondary") {
    classNameToggle = SECONDARY_BUTTON;
  } else if (buttonLevel === "tertiary") {
    classNameToggle = TERTIARY_BUTTON;
  }

  let customizedLabel = null;

  if (children) { // if children is present, see if the position is specified
    if (iconPosition === "left") customizedLabel = ` ${children} ` + text;
    else customizedLabel = text + ` ${children} `; // default children on the right side
  }

  return (
    <button onClick={onClick} className={classNameToggle}>
      <span>{customizedLabel || text}</span>
    </button>
  );
};

export default Button;
