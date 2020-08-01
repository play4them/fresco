import React from "react";

import { Text } from "../..";

import { Flex } from "..";

export default {
  title: "Flex",
};

export const standard = () => (
  <Flex
    justifyContent="flex-end"
    alignItems="flex-end"
    width={256}
    height={256}
    bg="fill.0"
  >
    <Text children="Child" />
  </Flex>
);
