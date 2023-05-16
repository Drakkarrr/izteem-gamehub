import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectSort: (sort: string) => void;
  sortOrder: string;
}

const SortSelector: React.FC<SortSelectorProps> = ({
  onSelectSort,
  sortOrder,
}) => {
  const sortOrders = [
    { name: "Relevance", value: "relevance" },
    { name: "Date Added", value: "-added" },
    { name: "Name", value: "name" },
    { name: "Release Date", value: "-released" },
    { name: "Popularity", value: "-metacritic" },
    { name: "Average Rating", value: "-rating" },
  ];

  const selectedSort = sortOrders.find((sort) => sort.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSort?.name || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSort(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
