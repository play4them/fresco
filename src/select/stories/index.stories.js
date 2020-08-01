import React from "react";

import { Select } from "..";

export default {
  title: "Select",
};

export const standard = () => (
  <Select>
    <option children="Choose an option" disabled selected />
    <option children="Option 1" />
  </Select>
);

export const error = () => (
  <Select validationMessage="Uh oh">
    <option children="Choose an option" disabled selected />
    <option children="Option 1" />
  </Select>
);
