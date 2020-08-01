/**
 * HStack
 *
 * HStack allows us to horizontally stack elements by a value
 * define by the space prop. It accepts most units and values
 * as well as spacing properties in the Theme.
 */

import React, { Children } from "react";

import { Box } from "../../box";
import { Divider } from "../../divider";

function flexAlign(x) {
  if (x === "start") return "flex-start";
  if (x === "center") return "center";
  if (x === "end") return "flex-end";
  return undefined;
}

function HStack({
  align,
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
      data-fresco-id="stacks.hStack"
      as={as}
      display="flex"
      justifyContent="flex-start"
      alignItems={flexAlign(align)}
      m={0}
      p={0}
      css={isList && { listStyle: "none" }}
    >
      {stackItems.map((child, index) => (
        <Box
          data-fresco-id="stacks.hStack.child"
          as={stackItemComponent}
          display="flex"
          minWidth={0}
          pr={dividers ? undefined : space}
          css={{ ":last-of-type": { paddingRight: 0 } }}
          key={"child" + index}
        >
          {dividers && index > 0 ? (
            <Box data-fresco-id="stacks.hStack.child.divider" px={space}>
              <Divider color={dividerColor} vertical />
            </Box>
          ) : null}
          {child}
        </Box>
      ))}
    </Box>
  );
}

export default HStack;
