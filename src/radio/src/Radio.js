import React from "react";
import { useTheme } from "emotion-theming";
import uuidv4 from "uuid/v4";
import css from "@styled-system/css";
import { hideVisually, rgba } from "polished";

import { Box } from "../../box";
import { Text } from "../../typography";

const getControlSizeForTextSize = size => {
  if (size <= 300) return 16;
  if (size <= 400) return 20;
  if (size <= 500) return 20;
  if (size <= 600) return 24;
  return 24;
};

const Radio = ({ bg, children, indeterminate, size, ...rest }) => {
  const uid = uuidv4();
  const theme = useTheme();
  const cs = getControlSizeForTextSize(size) - 4;

  return (
    <Text
      data-fresco-id="radio"
      role="radio"
      as="label"
      htmlFor={uid}
      size={size}
      position="relative"
      display="inline-block"
      pl={`calc(${cs + "px"} + 4px)`}
      css={{ userSelect: "none", cursor: "pointer" }}
    >
      <Box
        data-fresco-id="radio.hiddenInput"
        role="presentation"
        as="input"
        id={uid}
        type="radio"
        ref={el => el && (el.indeterminate = indeterminate)}
        css={css({
          ...hideVisually(),
          "+ div": {
            backgroundImage:
              "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+DQo8L3N2Zz4NCg==)",
            backgroundSize: "50% 50%",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            boxShadow: `inset 0 0 0 1px ${rgba(
              theme.colors.gray[9],
              0.2
            )}, 0 0 1px ${rgba(theme.colors.gray[4], 0.1)}, 0 1px 2px ${rgba(
              theme.colors.gray[4],
              0.1
            )}`,
            userSelect: "none"
          },
          ":checked + div": {
            bg: "blue.4",
            boxShadow: `inset 0 0 0 1px ${rgba(
              theme.colors.gray[9],
              0
            )}, 0 0 1px ${rgba(theme.colors.gray[4], 0.1)}, 0 1px 2px ${rgba(
              theme.colors.gray[4],
              0.1
            )}`
          },
          ":active + div": {
            bg: "blue.1"
          },
          ":focus + div": {
            boxShadow: `inset 0 0 0 1px ${theme.colors.blue[4]}, 0 0 1px ${rgba(
              theme.colors.gray[4],
              0.1
            )}, 0 1px 2px ${rgba(theme.colors.gray[4], 0.1)}`
          }
        })}
        {...rest}
      />
      <Box
        data-fresco-id="radio.control"
        position="absolute"
        top="spacing.1"
        left={0}
        display="block"
        width={cs}
        height={cs}
        borderRadius={9999}
        color="gray.0"
        bg={bg}
      />
      <Box data-fresco-id="radio.text" as="span">
        {children}
      </Box>
    </Text>
  );
};

Radio.defaultProps = {
  bg: "gray.0",
  size: 400
};

export default Radio;
