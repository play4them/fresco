import React from "react";
import { useTheme } from "emotion-theming";
import TextareaAutosize from "react-textarea-autosize";
import css from "@styled-system/css";
import { rgba } from "polished";

import { Box } from "../../box";
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

const Textarea = ({ bg, height, ...rest }) => {
  const theme = useTheme();
  const br = getBorderRadiusForControlHeight(height);
  const ts = getTextSizeForControlHeight(height);
  const p = Math.round(height / 4);

  return (
    <Box
      data-playground-id="textarea"
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
      <Text
        data-playground-id="textarea.field"
        as={TextareaAutosize}
        size={ts}
        display="block"
        width="100%"
        height={height}
        m={0}
        px={p + "px"}
        py="10px"
        border={0}
        color="gray.9"
        bg="transparent"
        css={css({
          resize: "none",
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
    </Box>
  );
};

Textarea.defaultProps = {
  bg: "gray.0",
  height: 40
};

export default Textarea;
