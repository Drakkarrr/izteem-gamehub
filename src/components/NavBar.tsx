import { HStack, Img } from "@chakra-ui/react";
import IzteemLogo from "../assets/izteem.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding="10px">
        <Img src={IzteemLogo} boxSize="150px" alt="Logo" />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
