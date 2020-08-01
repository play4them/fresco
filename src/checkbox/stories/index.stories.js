import React from "react";

import { Box, ColorMode } from "../..";

import { Checkbox } from "..";

export default {
  title: "Checkbox",
};

export const regular = () => <Checkbox defaultChecked>Checkbox</Checkbox>;

export const small = () => <Checkbox size={300}>Checkbox</Checkbox>;

export const indeterminate = () => (
  <Checkbox indeterminate size={500}>
    Checkbox
  </Checkbox>
);

export const darkMode = () => (
  <ColorMode mode="dark">
    <Box p="layout.3" bg="background.0">
      <Checkbox defaultChecked>Checkbox</Checkbox>
    </Box>
  </ColorMode>
);
