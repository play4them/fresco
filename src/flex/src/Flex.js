import React from "react";

import { Box } from "../../box";

const Flex = ({ children, ...rest }) => (
  <Box data-fresco-id="💪" {...rest}>
    {children}
  </Box>
);

export default Flex;
