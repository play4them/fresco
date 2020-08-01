import React from "react";

import { Box } from "../..";

import { Tooltip } from "..";

export default {
  title: "Tooltip",
};

export const standard = () => (
  <Tooltip label="Tooltip">
    <Box width={64} height={64} bg="fill.0" />
  </Tooltip>
);
