import React, { FC } from "react";
import classNames from "classnames";
import { ClassValue } from "classnames/types";

type ButtonTypes = {
  children: React.ReactNode;
  disabled?: boolean;
  buttonLevel?: "primary" | "secondary" | "tertiary";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: ClassValue;
  textWrap?: boolean;
  isLoading?: boolean;
  type?: "submit";
  buttonRef?: React.MutableRefObject<any>;
};

export const Button: FC<ButtonTypes> = ({
  disabled,
  buttonLevel,
  children,
  className,
  onClick,
  ...otherProps
}) => {
  const isPrimary = buttonLevel === "primary" || !buttonLevel;
  const buttonStyle = classNames(
    {
      "bg-blue-600 text-white": isPrimary,
      "hover:bg-blue-700": isPrimary && !disabled,
      "opacity-50 cursor-not-allowed": disabled,
      "bg-white border border-blue-600 text-blue-600  hover:bg-gray-50":
        buttonLevel === "secondary",
      "hover:bg-gray-100 text-blue-600 ": buttonLevel === "tertiary",
    },
    "rounded-md px-6 py-4",
    className
  );

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
