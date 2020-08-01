/**
 * Text Link
 */

import React, { forwardRef } from "react";

import { Box } from "../../box";

const TextLink = forwardRef(({ ...props }, ref) => {
  return (
    <Box
      data-fresco-id="textLink"
      ref={ref}
      as="span"
      color="link"
      {...props}
    />
  );
});

export default TextLink;
