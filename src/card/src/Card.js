/**
 * Card
 *
 * Rather than nesting content in arbitrary ‘Box’ elements,
 * you may prefer to use standard ‘Card’ elements instead.
 */

import React, { forwardRef } from "react";

import { Box } from "../../box";

const Card = forwardRef(({ ...props }, ref) => {
  return <Box data-fresco-id="card" ref={ref} {...props} />;
});

export default Card;
