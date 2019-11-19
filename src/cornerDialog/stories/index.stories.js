import React from "react";

import { CornerDialog } from "..";

export default {
  title: "Corner Dialog"
};

export const standard = () => (
  <CornerDialog
    title="Corner dialog"
    button={{
      children: "Learn More",
      intent: "primary",
      appearance: "primary"
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </CornerDialog>
);
