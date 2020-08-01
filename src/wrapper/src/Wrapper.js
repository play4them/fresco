/**
 * Wrapper
 *
 * We use the Wrapper to center and max-out content so
 * that we maintain readable text and organized content
 * through the main spreads of the project.
 *
 * This controls the margins on each side of the content
 * so that content never bleeds into the edge of the
 * screen.
 */

import React from "react";

import { Box } from "../../box";
import { ContentBlock } from "../../contentBlock";

function Wrapper({
  as,
  children,
  maxWidth,
  pb,
  pt,
  px = { _: "layout.1", md: "layout.3" },
  overflow,
  ...rest
}) {
  return (
    <Box
      data-fresco-id="wrapper"
      as={as}
      px={px}
      pt={pt}
      pb={pb}
      overflow={overflow}
      bg={bg}
      {...rest}
    >
      <ContentBlock maxWidth={maxWidth}>{children}</ContentBlock>
    </Box>
  );
}

export default Wrapper;
