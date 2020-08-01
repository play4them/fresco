import React from "react";

import { Box, Button, Text, VStack } from "../..";

import { Dialog } from "..";

export default {
  title: "Dialog",
};

export const basic = () => (
  <Dialog
    as={Button}
    children="Open"
    dialog={{
      children: <Text children="Welcome to the Dialog" />,
    }}
  />
);

export const header = () => (
  <Dialog
    as={Button}
    children="Open"
    dialog={{
      name: "Dialog with name",
      children: <Text children="Welcome to the Dialog" />,
    }}
  />
);

function FancyContent({ close }) {
  return (
    <Box p="layout.2">
      <VStack space="layout.3">
        <Text children="Welcome to the Dialog" />
        <Button children="Close" type="button" onClick={close} />
      </VStack>
    </Box>
  );
}

export const fancy = () => (
  <Dialog
    as={Button}
    children="Open"
    dialog={{
      name: "Fancy",
      children: <FancyContent />,
    }}
  />
);
