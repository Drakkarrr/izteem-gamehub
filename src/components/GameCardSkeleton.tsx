import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
