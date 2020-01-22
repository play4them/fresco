import React from "react";
import { mdiChevronDown, mdiDownload } from "@mdi/js";
import { rgba } from "polished";
import css from "@styled-system/css";

import { Box, Text } from "../..";
import { Button, IconButton } from "..";

import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import { Global } from "@emotion/core";

export default {
  title: "Buttons"
};

export const defaultAppearance = () => (
  <>
    <Button children="Default" />
    <Button children="Primary" intent="primary" />
    <Button children="Success" intent="success" />
    <Button children="Warning" intent="warning" />
    <Button children="Danger" intent="danger" />
  </>
);

export const withIcon = () => (
  <>
    <Button children="Download" iconBefore={mdiDownload} height={32} />
  </>
);

export const smaller = () => (
  <>
    <Button children="Download" height={32} />
  </>
);

export const primaryAppearance = () => (
  <>
    <Button children="Default" appearance="primary" />
    <Button children="Primary" intent="primary" appearance="primary" />
    <Button children="Success" intent="success" appearance="primary" />
    <Button children="Warning" intent="warning" appearance="primary" />
    <Button children="Danger" intent="danger" appearance="primary" />
  </>
);

export const minimalAppearance = () => (
  <>
    <Button children="Default" appearance="minimal" />
    <Button children="Primary" intent="primary" appearance="minimal" />
    <Button children="Success" intent="success" appearance="minimal" />
    <Button children="Warning" intent="warning" appearance="minimal" />
    <Button children="Danger" intent="danger" appearance="minimal" />
  </>
);

export const subtleAppearance = () => (
  <>
    <Button children="Default" appearance="subtle" />
    <Button children="Primary" intent="primary" appearance="subtle" />
    <Button children="Success" intent="success" appearance="subtle" />
    <Button children="Warning" intent="warning" appearance="subtle" />
    <Button children="Danger" intent="danger" appearance="subtle" />
  </>
);

export const iconDefaultAppearance = () => (
  <>
    <IconButton children="Default" />
    <IconButton intent="primary" />
    <IconButton intent="success" />
    <IconButton intent="warning" />
    <IconButton intent="danger" />
  </>
);

export const menuButton = () => (
  <>
    <Global
      styles={css({
        "[data-reach-menu]": {
          position: "absolute",
          display: "block",
          mt: "4px",
          py: "6px",
          borderRadius: "3px",
          boxShadow: `
            0 0px 1px ${rgba("#3b3e4d", 0.15)},
            0 1px 2px ${rgba("#3b3e4d", 0.125)},
            0 2px 4px ${rgba("#3b3e4d", 0.1)},
            0 4px 8px ${rgba("#3b3e4d", 0.075)},
            0 8px 16px ${rgba("#3b3e4d", 0.0625)}
            `
        },
        "[data-reach-menu-item]": {
          '&[data-selected="true"], :focus': {
            bg: "gray.1",
            outline: 0
          }
        }
      })}
    />
    <Menu>
      <Button
        children="Menu"
        as={MenuButton}
        iconAfter={mdiChevronDown}
        height={32}
      />
      <MenuList>
        <MenuItem>
          <Box px="16px" py="4px">
            <Text size={400} display="block">
              Hide
            </Text>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box px="16px" py="4px">
            <Text size={400} display="block">
              Delete
            </Text>
          </Box>
        </MenuItem>
        <Box width="100%" height="1px" mt="8px" bg="gray.2" />
        <Box px="16px" py="4px">
          <Text size={300} color="gray.5">
            Colors
          </Text>
        </Box>
        <MenuItem>
          <Box px="16px" py="4px">
            <Text size={400} display="block">
              New entry
            </Text>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box px="16px" py="4px">
            <Text size={400} display="block">
              Get Help
            </Text>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  </>
);
