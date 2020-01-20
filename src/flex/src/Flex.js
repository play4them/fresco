import React from "react";

import { Box } from "../../box";

const Flex = ({ children, ...rest }) => (
  <Box data-playground-id="💪" display="flex" {...rest}>
    {children}
  </Box>
);

export default Flex;
