import React from "react";
import { Dialog } from "..";

export default {
  title: "Dialog"
};

export const regular = () => (
  <Dialog
    trigger={<button>Show Dialog</button>}
    closeButton={<button>Close Dialog</button>}
    children={"test"}
  />
);
