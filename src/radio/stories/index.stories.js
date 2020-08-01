import React from "react";

import { Box, ColorMode } from "../..";

import { Radio, RadioGroup } from "..";

export default {
  title: "Radio",
};

export const regular = () => <Radio>Just a regular radio by itself</Radio>;

export const group = () => (
  <RadioGroup
    options={[
      {
        label: "Option 1",
        value: 1,
      },
      {
        label: "Option 2",
        value: 2,
      },
    ]}
  />
);

export const groupStack = () => (
  <RadioGroup
    options={[
      {
        label: "Option 1",
        value: 1,
      },
      {
        label: "Option 2",
        value: 2,
      },
    ]}
    stack
  />
);

export const groupStackError = () => (
  <RadioGroup
    options={[
      {
        label: "Option 1",
        value: 1,
      },
      {
        label: "Option 2",
        value: 2,
      },
    ]}
    validationMessage="Uh oh"
    stack
  />
);

export const darkMode = () => (
  <ColorMode mode="dark">
    <Box p="layout.3" bg="background.0">
      <RadioGroup
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
        ]}
        stack
      />
    </Box>
  </ColorMode>
);
