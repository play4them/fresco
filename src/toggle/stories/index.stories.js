import React from "react";

import { Toggle } from "..";

export default {
  title: "Toggle",
};

export const regular = () => <Toggle children="Toggle" size={500} />;

export const small = () => <Toggle children="Small" size={400} small />;
