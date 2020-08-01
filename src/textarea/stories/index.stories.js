import React from "react";

import { Textarea } from "..";

export default {
  title: "Textarea",
};

export const standard = () => (
  <Textarea placeholder="Placeholder" minRows={6} />
);
