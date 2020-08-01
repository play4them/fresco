import React from "react";
import * as Reach from "@reach/tooltip";
import css from "@styled-system/css";

/**
 * Make sure you add:
 *
 * import "@reach/tooltip/styles.css";
 *
 * to the project you are using this in.
 */

function Tooltip({ children, ...rest }) {
  return (
    <Reach.Tooltip
      data-component-id="tooltip"
      css={css({
        "&[data-reach-tooltip]": {
          display: "inline-block",
          px: "spacing.3",
          py: "spacing.3",
          borderWidth: 0,
          borderRadius: "corners.2",
          fontSize: 13,
          fontWeight: 500,
          lineHeight: 1,
          color: "background.0",
          bg: "label.0",
          boxShadow: "elevations.4",
        },
      })}
      {...rest}
    >
      {children}
    </Reach.Tooltip>
  );
}

export default Tooltip;
