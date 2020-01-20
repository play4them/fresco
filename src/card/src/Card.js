import React from "react";

import { Box } from "../../box";

const Card = ({ children, elevation, ...rest }) => (
  <Box
    data-playground-id="card"
    boxShadow={"elevations." + elevation}
    {...rest}
  >
    {children}
  </Box>
);

Card.defaultProps = {
  bg: "gray.0",
  borderRadius: "5px"
};

export default Card;
