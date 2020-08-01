import React from "react";
import css from "@styled-system/css";
import { useTheme } from "emotion-theming";
import { v4 as uuidv4 } from "uuid";

import { Box } from "../../box";
import { Text } from "../../typography";

const Toggle = ({ children, size, width, small, ...rest }) => {
  const UID = uuidv4();

  const THEME = useTheme();

  const getTextOffsetForTextSize = (size) => {
    if (size <= 300) return 8;
    if (size <= 400) return 7;
    if (size <= 500) return 6;
    return 2;
  };
  let TEXT_OFFSET = getTextOffsetForTextSize(size) + "px";

  const getControlOffsetForTextSize = (size) => {
    if (size <= 300) return 0;
    if (size <= 400) return 0;
    if (size <= 500) return 0;
    if (size <= 600) return 2;
    return 2;
  };
  let CONTROL_OFFSET = getControlOffsetForTextSize(size) + "px";

  let CONTROL_WIDTH = 40;
  let CONTROL_HEIGHT = 24;

  if (small) {
    CONTROL_WIDTH = 32;
    CONTROL_HEIGHT = 20;
    TEXT_OFFSET = 5 + "px";
  } else {
    CONTROL_OFFSET = 0;
  }

  return (
    <Box
      data-fresco-id="toggle"
      as="label"
      htmlFor={UID}
      display="inline-flex"
      justifyContent="space-between"
      width={width}
      css={{ userSelect: "none", cursor: "pointer" }}
    >
      {children && (
        <Box data-fresco-id="toggle.label" flex={1} pt={TEXT_OFFSET}>
          <Text size={size}>{children}</Text>
        </Box>
      )}
      <Box
        data-fresco-id="toggle.control"
        as="input"
        id={UID}
        type="checkbox"
        position="relative"
        display="inline-block"
        width={CONTROL_WIDTH}
        height={CONTROL_HEIGHT}
        m={0}
        mt={CONTROL_OFFSET}
        ml={children && "spacing.3"}
        border={0}
        borderRadius={9999}
        bg="fill.0"
        boxShadow="0 6px 16px -3px rgba(0, 0, 0, 0.1)"
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
            width: CONTROL_HEIGHT - 4 + "px",
            height: CONTROL_HEIGHT - 4 + "px",
            borderRadius: "50%",
            bg: "background.0",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            transition: "all 200ms cubic-bezier(.5,.1,.75,1.35)",
          },
          "&:checked": {
            bg: "tint.green",
            "::after": {
              transform:
                "translateX(" + (CONTROL_WIDTH - CONTROL_HEIGHT) + "px)",
            },
          },
          "&:focus": {
            outline: 0,
            boxShadow: `${THEME.colors.fill[1]} 0px 0px 0px 3px`,
          },
        })}
        {...rest}
      />
    </Box>
  );
};

Toggle.defaultProps = {
  size: 400,
};

export default Toggle;
