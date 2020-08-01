/**
 * VStack
 *
 * VStack allows us to vertically stack elements by a value
 * define by the space prop. It accepts most units and values
 * as well as spacing properties in the Theme.
 */

import React, { Children } from "react";

import { Box } from "../../box";
import { Divider } from "../../divider";

function flexAlign(x) {
  if (x === "start") return null;
  if (x === "center") return "center";
  if (x === "end") return "flex-end";
  return undefined;
}

function VStack({
  align = "start",
  as = "div",
  children,
  dividers = false,
  dividerColor,
  space = 0,
}) {
  const stackItems = Children.toArray(children);

  const isList = as === "ol" || as === "ul";
  const stackItemComponent = isList ? "li" : "div";

  return (
    <Box
      data-fresco-id="stacks.vStack"
      as={as}
      display={align !== "start" && "flex"}
      flexDirection={align !== "start" && "column"}
      alignItems={flexAlign(align)}
      m={0}
      p={0}
      css={isList && { listStyle: "none" }}
    >
      {stackItems.map((child, index) => (
        <Box
          data-fresco-id="stacks.vStack.child"
          as={stackItemComponent}
          minWidth={0}
          pb={dividers ? undefined : space}
          css={{ ":last-of-type": { paddingBottom: 0 } }}
          key={"child" + index}
        >
          {dividers && index > 0 ? (
            <Box
              data-fresco-id="stacks.vStack.child.divider"
              width="100%"
              py={space}
            >
              <Divider color={dividerColor} horizontal />
            </Box>
          ) : null}
          {child}
        </Box>
      ))}
    </Box>
  );
}

export default VStack;
