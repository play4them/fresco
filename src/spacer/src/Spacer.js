/**
 * Spacer
 */

import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { system } from "styled-system";

import { Box } from "../../box";

const StyledBox = styled(Box)(
  system({
    spaceX: {
      property: "width",
      scale: "space",
    },
    spaceY: {
      property: "height",
      scale: "space",
    },
  })
);

const Spacer = forwardRef(({ space = 0, spaceX, spaceY, ...props }, ref) => {
  return (
    <StyledBox
      data-fresco-id="spacer"
      ref={ref}
      spaceX={spaceX ? spaceX : space}
      spaceY={spaceY ? spaceY : space}
      {...props}
    />
  );
});

export default Spacer;
