import { HStack, Img } from "@chakra-ui/react";
import IzteemLogo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import React from "react";

interface SearchInputProps {
  onSearch: (searchQuery: string) => void;
}

const NavBar: React.FC<SearchInputProps> = ({ onSearch }) => {
  return (
    <>
      <HStack padding="10px">
        <Img src={IzteemLogo} boxSize="150px" alt="Logo" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
