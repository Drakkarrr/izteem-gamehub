import { HStack, Img } from "@chakra-ui/react";
import IzteemLogo from "../assets/izteem.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        <Img src={IzteemLogo} boxSize="150px" alt="Logo" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
