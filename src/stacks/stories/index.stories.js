import React from "react";

import { Box } from "../..";
import { HStack, VStack } from "..";

export default {
  title: "Stacks",
};

export const hStack = () => (
  <>
    <HStack space="layout.1">
      <Box width="64px" height="64px" bg="gray.3" />
      <Box width="64px" height="64px" bg="gray.3" />
      <Box width="64px" height="64px" bg="gray.3" />
    </HStack>
  </>
);

export const vStack = () => (
  <>
    <VStack space="layout.1">
      <Box width="64px" height="64px" bg="gray.3" />
      <Box width="64px" height="64px" bg="gray.3" />
      <Box width="64px" height="64px" bg="gray.3" />
    </VStack>
  </>
);

export const hStackDividers = () => (
  <>
    <HStack space="layout.1" dividers={true}>
      <Box width="64px" height="64px" bg="gray.3" />
      <Box width="64px" height="64px" bg="gray.3" />
      <Box width="64px" height="64px" bg="gray.3" />
    </HStack>
  </>
);

export const vStackDividers = () => (
  <>
    <VStack space="layout.1" dividers={true}>
      <Box width="64px" height="64px" bg="gray.3" />
      <Box width="64px" height="64px" bg="gray.3" />
      <Box width="64px" height="64px" bg="gray.3" />
    </VStack>
  </>
);
