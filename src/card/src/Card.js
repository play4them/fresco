import React from "react";

import { Box } from "../../box";

const Card = ({ children, elevation, ...rest }) => (
  <Box data-fresco-id="card" boxShadow={"elevations." + elevation} {...rest}>
    {children}
  </Box>
);

Card.defaultProps = {
  bg: "white",
  borderRadius: "5px"
};

export default Card;
