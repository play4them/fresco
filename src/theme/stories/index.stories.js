import React from "react";

import { Box, Card, Inline } from "../..";

export default {
  title: "Theme",
};

export const shadows = () => (
  <Box m="layout.3">
    <Inline space="layout.3">
      <Card width={128} height={128} boxShadow="elevations.1" />
      <Card width={128} height={128} boxShadow="elevations.2" />
      <Card width={128} height={128} boxShadow="elevations.3" />
      <Card width={128} height={128} boxShadow="elevations.4" />
    </Inline>
  </Box>
);
