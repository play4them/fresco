import React from "react";

import { Card } from "..";

export default {
  title: "Card",
};

export const standard = () => (
  <Card
    width={128}
    height={128}
    m="layout.3"
    borderRadius="corners.2"
    boxShadow="elevations.1"
  />
);
