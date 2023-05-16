import React from "react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbs from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const RatingIcons: React.FC<Props> = ({ rating }) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: bullsEye, alt: "Exceptional", boxSize: "35px" },
    4: { src: meh, alt: "Meh", boxSize: "25px" },
    5: { src: thumbs, alt: "Recommended", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default RatingIcons;
