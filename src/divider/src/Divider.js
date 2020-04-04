import React from "react";

import { Box } from "../../box";

function Divider() {
  return (
    <Box data-fresco-id="divider" position="relative">
      <Box
        data-component-id="divider.line"
        position="absolute"
        width="100%"
        height="1px"
        bg="gray.3"
        css={{ transform: "translateY(-50%)" }}
      />
    </Box>
  );
}

export default Divider;
