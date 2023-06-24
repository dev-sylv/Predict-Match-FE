import React from "react";
import { IButton } from "../../Types/interface/interface";

const ButtonProps: React.FC<IButton> = ({ className, text }) => {
  return <div className={className}>{text}</div>;
};

export default ButtonProps;
