import React from "react";

import { Box, Column } from "../..";
import { Columns } from "..";

export default {
  title: "Columns",
};

export const standard = () => (
  <>
    <Columns space="layout.1">
      <Column width={1 / 4}>
        <Box pb="50%" bg="gray.3" />
      </Column>
      <Column width={1 / 4}>
        <Box pb="50%" bg="gray.3" />
      </Column>
      <Column width={1 / 4}>
        <Box pb="50%" bg="gray.3" />
      </Column>
      <Column width={1 / 4}>
        <Box pb="50%" bg="gray.3" />
      </Column>
    </Columns>
  </>
);
