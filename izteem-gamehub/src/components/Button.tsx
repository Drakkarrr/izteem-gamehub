import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "primary" | "secondary" | "success" | "danger" | "warning";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
