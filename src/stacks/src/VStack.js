import React, { Children } from "react";

import { Box } from "../../box";
import { Divider } from "../../divider";

function flexAlign(x) {
  if (x === "start") return "flex-start";
  if (x === "center") return "center";
  if (x === "end") return "flex-end";
  return undefined;
}

function VStack({ align, as = "div", children, dividers = false, space = 0 }) {
  const stackItems = Children.toArray(children);

  const isList = as === "ol" || as === "ul";
  const stackItemComponent = isList ? "li" : "div";

  return (
    <Box
      data-fresco-id="stacks.vStack"
      as={as}
      display="flex"
      flexDirection="column"
      alignItems={flexAlign(align)}
      m={0}
      p={0}
      css={{ listStyle: "none" }}
    >
      {stackItems.map((child, index) => (
        <Box
          data-fresco-id="stacks.vStack.child"
          as={stackItemComponent}
          width="100%"
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
              <Divider />
            </Box>
          ) : null}
          {child}
        </Box>
      ))}
    </Box>
  );
}

export default VStack;
