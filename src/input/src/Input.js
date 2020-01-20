import React from "react";
import { useTheme } from "emotion-theming";
import css from "@styled-system/css";
import { rgba } from "polished";

import { Box } from "../../box";
import { Icon } from "../../icon";
import { Text } from "../../typography";

const getBorderRadiusForControlHeight = height => {
  if (height <= 40) return "3px";
  return "5px";
};

const getTextSizeForControlHeight = height => {
  if (height <= 32) return 500;
  if (height <= 40) return 500;
  if (height <= 48) return 600;
  return 600;
};

const getIconSizeForButton = height => {
  if (height <= 32) return 16;
  if (height <= 40) return 20;
  if (height <= 48) return 24;
  return 24;
};

const Input = ({ bg, height, iconAfter, iconBefore, ...rest }) => {
  const theme = useTheme();
  const br = getBorderRadiusForControlHeight(height);
  const is = getIconSizeForButton(height);
  const p = Math.round(height / 4);
  const ts = getTextSizeForControlHeight(height);

  return (
    <Box
      data-playground-id="input"
      position="relative"
      borderRadius={br}
      bg={bg}
      overflow="hidden"
      boxShadow={`
        ${rgba(theme.colors.gray[9], 0.1)} 
        0 0 0 1px inset, 
        ${rgba(theme.colors.gray[9], 0.1)}
        0 1px 2px inset
    `}
    >
      {iconBefore && (
        <Box
          data-playground-id="input.iconBefore"
          position="absolute"
          top={0}
          left={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={height}
          height={height}
          css={{ userSelect: "none", pointerEvents: "none" }}
        >
          <Icon symbol={iconBefore} size={is} color="gray.4" />
        </Box>
      )}
      <Text
        data-playground-id="input.field"
        as="input"
        size={ts}
        display="block"
        width="100%"
        height={height}
        m={0}
        pr={iconAfter ? height + "px" : p + "px"}
        pl={iconBefore ? height + "px" : p + "px"}
        py="10px"
        border={0}
        color="gray.9"
        bg="transparent"
        css={css({
          "::placeholder": {
            color: "gray.9",
            opacity: 1 / 3
          },
          ":focus": {
            outline: 0
          }
        })}
        {...rest}
      />
      {iconAfter && (
        <Box
          data-playground-id="input.iconAfter"
          position="absolute"
          top={0}
          right={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={height}
          height={height}
          css={{ userSelect: "none", pointerEvents: "none" }}
        >
          <Icon symbol={iconAfter} size={is} color="gray.4" />
        </Box>
      )}
    </Box>
  );
};

Input.defaultProps = {
  bg: "gray.0",
  height: 40,
  type: "text"
};

export default Input;
