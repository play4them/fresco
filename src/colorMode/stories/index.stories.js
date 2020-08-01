import React from "react";

import { Box, Text } from "../..";

import { ColorMode } from "..";

export default {
  title: "Color Mode",
};

export const standard = () => (
  <Box>
    <ColorMode mode="light">
      <Box p="layout.5" bg="background.0">
        <Text children="Light" />
      </Box>
    </ColorMode>
    <ColorMode mode="dark">
      <Box p="layout.5" bg="background.0">
        <Text children="Dark" />
      </Box>
    </ColorMode>
  </Box>
);
