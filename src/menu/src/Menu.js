import React from "react";
import * as Reach from "@reach/menu-button";

import { Box } from "../../box";
import { Button } from "../../buttons";
import { Heading, Text } from "../../typography";

const Item = ({ children, ...rest }) => (
  <Text
    data-playground-id="menu.list.item"
    size={400}
    px="layout.2"
    py="spacing.2"
    borderRadius="3px"
    {...rest}
  >
    {children}
  </Text>
);

const Menu = () => {
  return (
    <Reach.Menu>
      <Button as={Reach.MenuButton}>Actions</Button>
      <Box
        data-playground-id="menu.popover"
        as={Reach.MenuPopover}
        display="inline-block"
        mt="spacing.2"
        borderRadius="5px"
        bg="gray.0"
        boxShadow="elevations.3"
      >
        <Box as={Reach.MenuItems} py="layout.1">
          <Text size={300} px="layout.2" py="spacing.2" color="gray.7">
            Label
          </Text>
          <Reach.MenuItem>
            <Item>sfsefgsg</Item>
          </Reach.MenuItem>
          <Reach.MenuItem>
            <Item>sfsefgsg</Item>
          </Reach.MenuItem>
          <Reach.MenuItem>
            <Item>sfsefgsg</Item>
          </Reach.MenuItem>
        </Box>
      </Box>
    </Reach.Menu>
  );
};

export default Menu;
