import React from "react";

import { Box } from "../../box";

const Card = ({ children, elevation, ...rest }) => (
  <Box data-fresco-id="card" boxShadow={"elevations." + elevation} {...rest}>
    {children}
  </Box>
);

Card.defaultProps = {
  elevation: 0,
  bg: "gray.0",
  borderRadius: "5px"
};

export default Card;
