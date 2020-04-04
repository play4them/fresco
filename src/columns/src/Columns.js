import React from "react";
import styled from "@emotion/styled";
import { system, get } from "styled-system";

import { Box } from "../../box";

function flexAlign(x) {
  if (x === "start") return "flex-start";
  if (x === "center") return "center";
  if (x === "end") return "flex-end";
  return undefined;
}

const StyledBox = styled(Box)(
  system({
    negativeMarginX: {
      properties: ["marginRight", "marginLeft"],
      scale: "space",
      transform: (n, scale) => {
        let value = get(scale, n);
        if (!value) {
          value = n;
        }
        if (typeof n === "string") {
          if (n.indexOf("px") !== -1) {
            let number = parseInt(n.replace("px", ""));
            return "-" + number / 2 + "px";
          } else {
            return "-" + value / 2 + "px";
          }
        } else {
          return "-" + value / 2 + "px";
        }
      },
    },
    negativeMarginY: {
      properties: ["marginTop", "marginBottom"],
      scale: "space",
      transform: (n, scale) => {
        let value = get(scale, n);
        if (!value) {
          value = n;
        }
        if (typeof n === "string") {
          if (n.indexOf("px") !== -1) {
            let number = parseInt(n.replace("px", ""));
            return "-" + number / 2 + "px";
          } else {
            return "-" + value / 2 + "px";
          }
        } else {
          return "-" + value / 2 + "px";
        }
      },
    },
  })
);

function Columns({ alignY, as = "div", children, space = 0, spaceX, spaceY }) {
  const isList = as === "ol" || as === "ul";
  const columnComponent = isList ? "li" : "div";

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      columnComponent: columnComponent,
      space: space,
      spaceX: spaceX,
      spaceY: spaceY,
    })
  );

  return (
    <StyledBox
      data-fresco-id="columns"
      as={as}
      display="flex"
      flexWrap="wrap"
      alignItems={flexAlign(alignY)}
      negativeMarginX={spaceX ? spaceX : space}
      negativeMarginY={spaceY ? spaceY : space}
      p={0}
      css={{ listStyle: "none" }}
    >
      {childrenWithProps}
    </StyledBox>
  );
}

export default Columns;
