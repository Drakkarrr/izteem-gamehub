import { Badge } from "@chakra-ui/react";
import React from "react";

interface CriticScoreProps {
  score: number;
}

const CriticScore: React.FC<CriticScoreProps> = ({ score }) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX="5px"
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
