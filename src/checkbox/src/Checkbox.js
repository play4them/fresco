import React from "react";
import { useTheme } from "emotion-theming";
import { v4 as uuidv4 } from "uuid";
import css from "@styled-system/css";
import { hideVisually, rgba } from "polished";

import { Box } from "../../box";
import { Text } from "../../typography";

const getControlSizeForTextSize = (size) => {
  if (size <= 300) return 16;
  if (size <= 400) return 16;
  if (size <= 500) return 16;
  if (size <= 600) return 20;
  return 20;
};

const getTextOffsetForTextSize = (size) => {
  if (size <= 300) return 4;
  if (size <= 400) return 3;
  if (size <= 500) return 2;
  return 2;
};

const Checkbox = ({ bg, children, indeterminate, size, ...rest }) => {
  const THEME = useTheme();
  const UID = uuidv4();
  const CS = getControlSizeForTextSize(size);
  const TEXT_OFFSET = getTextOffsetForTextSize(size) + "px";

  return (
    <Box
      data-fresco-id="checkbox"
      role="checkbox"
      as="label"
      htmlFor={UID}
      position="relative"
      display="inline-block"
      height={CS}
      pl={`calc(${CS + "px"} + 4px)`}
      verticalAlign="top"
      css={{ userSelect: "none", cursor: "pointer" }}
    >
      <Box
        data-fresco-id="checkbox.hiddenInput"
        as="input"
        id={UID}
        type="checkbox"
        ref={(el) => el && (el.indeterminate = indeterminate)}
        css={css({
          ...hideVisually(),
          "+ div": {
            backgroundImage:
              "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=)",
            backgroundSize: "50% 50%",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            boxShadow: `inset 0 0 0 1px ${rgba(
              THEME.colors.fill[0],
              0.2
            )}, 0 0 1px ${rgba(THEME.colors.fill[0], 0.1)}, 0 1px 2px ${rgba(
              THEME.colors.fill[0],
              0.1
            )}`,
            userSelect: "none",
          },
          ":checked + div": {
            bg: "tint.indigo",
            boxShadow: `inset 0 0 0 1px ${rgba(
              THEME.colors.fill[0],
              0
            )}, 0 0 1px ${rgba(THEME.colors.fill[0], 0.1)}, 0 1px 2px ${rgba(
              THEME.colors.fill[0],
              0.1
            )}`,
          },
          ":indeterminate + div": {
            bg: "tint.indigo",
            backgroundImage:
              "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOCA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDN2Mmg4VjNIMHoiLz4NCjwvc3ZnPg0K)",
            boxShadow: `inset 0 0 0 1px ${rgba(
              THEME.colors.fill[0],
              0
            )}, 0 0 1px ${rgba(THEME.colors.fill[0], 0.1)}, 0 1px 2px ${rgba(
              THEME.colors.fill[0],
              0.1
            )}`,
          },
          ":active + div": {
            bg: "tint.indigo",
          },
          ":focus + div": {
            boxShadow: `inset 0 0 0 1px ${
              THEME.colors.tint.indigo
            }, 0 0 1px ${rgba(THEME.colors.fill[0], 0.1)}, 0 1px 2px ${rgba(
              THEME.colors.fill[0],
              0.1
            )}`,
          },
        })}
        {...rest}
      />
      <Box
        data-fresco-id="checkbox.control"
        position="absolute"
        left={0}
        display="block"
        width={CS}
        height={CS}
        borderRadius="2px"
        color="white"
        bg={bg}
      />
      <Box pt={TEXT_OFFSET}>
        <Text data-fresco-id="checkbox.text" size={size}>
          {children}
        </Text>
      </Box>
    </Box>
  );
};

Checkbox.defaultProps = {
  bg: "white",
  size: 400,
};

export default Checkbox;
