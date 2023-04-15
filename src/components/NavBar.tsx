import { HStack, Img, Text } from "@chakra-ui/react";
import IzteemLogo from "../assets/izteem-logo.png";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Img src={IzteemLogo} boxSize={40} alt="Logo" />
        <Text fontSize="4xl">NavBar</Text>
      </HStack>
    </>
  );
};

export default NavBar;
