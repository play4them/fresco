import React from "react";
import uuidv4 from "uuid/v4";
import css from "@styled-system/css";

import { Box } from "../../box";
import { Text } from "../../typography";

const getOffsetForTextSize = size => {
  if (size <= 300) return 6;
  if (size <= 400) return 4;
  if (size <= 500) return 4;
  if (size <= 600) return 2;
  return 0;
};

const Toggle = ({ children, size, width, ...rest }) => {
  const controlWidth = 46;
  const controlHeight = 28;

  const uid = uuidv4();
  const p = getOffsetForTextSize(size) + "px";

  return (
    <Text
      data-fresco-id="toggle"
      as="label"
      htmlFor={uid}
      size={size}
      display="inline-flex"
      justifyContent="space-between"
      width={width}
      css={{ userSelect: "none", cursor: "pointer" }}
    >
      {children && (
        <Box data-fresco-id="toggle.label" flex={1} pt={p}>
          {children}
        </Box>
      )}
      <Box
        data-fresco-id="toggle.control"
        as="input"
        id={uid}
        type="checkbox"
        position="relative"
        display="inline-block"
        width={controlWidth}
        height={controlHeight}
        m={0}
        ml={children && "spacing.3"}
        border={0}
        borderRadius={9999}
        bg="gray.4"
        boxShadow="0 6px 16px -3px rgba(44, 44, 44, 0.1)"
        css={css({
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
          WebkitTapHighlightColor: "transparent",
          cursor: "pointer",
          transition: "all .2s ease",
          "::after": {
            content: "''",
            position: "absolute",
            top: "2px",
            left: "2px",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            bg: "gray.0",
            boxShadow: "0 1px 2px rgba(44, 44, 44, 0.2)",
            transition: "all .2s cubic-bezier(.5,.1,.75,1.35)"
          },
          "&:checked": {
            bg: "green.5",
            "::after": {
              transform: "translateX(18px)"
            }
          },
          "&:focus": { outline: 0 }
        })}
        {...rest}
      />
    </Text>
  );
};

Toggle.defaultProps = {
  size: 400
};

export default Toggle;
