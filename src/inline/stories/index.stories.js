import React from "react";

import { Text } from "../..";

import { Inline } from "..";

export default {
  title: "Inline",
};

export const standard = () => (
  <>
    <Inline space="layout.1">
      <Text children="Item" />
      <Text children="Item" />
      <Text children="Item" />
      <Text children="Item" />
    </Inline>
  </>
);
