import React from "react";

import { TextInput } from "..";

export default {
  title: "Text Input",
};

export const standard = () => (
  <TextInput placeholder="Placeholder" type="text" />
);

export const error = () => (
  <TextInput placeholder="Placeholder" type="text" validationMessage="Uh oh" />
);
