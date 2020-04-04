import React from "react";
import styled from "@emotion/styled";
import { system, get } from "styled-system";

import { Box } from "../../box";

const StyledBox = styled(Box)(
  system({
    gutterX: {
      properties: ["paddingRight", "paddingLeft"],
      scale: "space",
      transform: (n, scale) => {
        let value = get(scale, n);
        if (!value) {
          value = n;
        }
        if (typeof n === "string") {
          if (n.indexOf("px") !== -1) {
            let number = parseInt(n.replace("px", ""));
            return number / 2 + "px";
          } else {
            return value / 2 + "px";
          }
        } else {
          return value / 2 + "px";
        }
      },
    },
    gutterY: {
      properties: ["paddingTop", "paddingBottom"],
      scale: "space",
      transform: (n, scale) => {
        let value = get(scale, n);
        if (!value) {
          value = n;
        }
        if (typeof n === "string") {
          if (n.indexOf("px") !== -1) {
            let number = parseInt(n.replace("px", ""));
            return number / 2 + "px";
          } else {
            return value / 2 + "px";
          }
        } else {
          return value / 2 + "px";
        }
      },
    },
  })
);

function Column({
  children,
  columnComponent,
  display,
  order,
  space = 0,
  spaceX,
  spaceY,
  width,
}) {
  return (
    <StyledBox
      data-fresco-id="column"
      as={columnComponent}
      display={display}
      order={order}
      width={width}
      minWidth={0}
      gutterX={spaceX ? spaceX : space}
      gutterY={spaceY ? spaceY : space}
    >
      <Box data-fresco-id="column.inner" height="100%">
        {children}
      </Box>
    </StyledBox>
  );
}

export default Column;
