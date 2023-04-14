import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

interface IconsProps {
  onClick: () => void;
}

const Icons: React.FC<IconsProps> = ({ onClick }) => {
  return (
    <div>
      <AiFillCalendar size={50} />
      <FcLike size={50} onClick={() => console.log("clicked")} />
    </div>
  );
};

export default Icons;
