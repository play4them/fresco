import React from "react";

import { Textarea } from "..";

export default {
  title: "Textarea",
};

export const standard = () => (
  <Textarea placeholder="Placeholder" minRows={6} />
);

export const error = () => (
  <Textarea placeholder="Placeholder" type="text" validationMessage="Uh oh" />
);
