import React, { useState } from "react";
import css from "@styled-system/css";
import { useTheme } from "emotion-theming";

import { Box } from "../../box";
import { Icon } from "../../icon";
import { ValidationMessage } from "../../validationMessage";

const getTextSizeForControlHeight = (height) => {
  if (height <= 24) return 14;
  if (height <= 28) return 14;
  if (height <= 32) return 16;
  if (height <= 36) return 16;
  if (height <= 40) return 16;
  return 16;
};

const getIconSizeForButton = (height) => {
  if (height <= 28) return 16;
  if (height <= 32) return 16;
  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
};

const Select = ({
  children,
  height,
  id,
  round,
  validationMessage,
  value,
  onChange,
  ...rest
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const THEME = useTheme();

  const is = getIconSizeForButton(height);
  const ts = getTextSizeForControlHeight(height);

  return (
    <>
      <Box
        data-fresco-id="select"
        className={isHovering === true ? "isHovering" : undefined}
        position="relative"
        display="inline-flex"
        borderRadius={round ? "round" : "corners.1"}
        css={css({
          "&:focus-within": {
            select: {
              borderColor: "tint.blue",
              outline: 0,
              boxShadow: `inset 0 0 0 2px ${THEME.colors.fill[0]}`,
            },
          },
          "&.isHovering": {
            select: {
              borderColor: "fill.3",
            },
            select: {
              "&:focus, &:focus-within": {
                borderColor: "tint.blue",
              },
            },
          },
        })}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        {...rest}
      >
        <Box
          data-fresco-id="select.control"
          as="select"
          id={id}
          width="100%"
          height={height}
          m={0}
          pl={Math.round(height / 4) + "px"}
          pr={Math.round(height / 1.5) + "px"}
          py={0}
          borderWidth={1}
          borderColor="fill.0"
          borderRadius={round ? "round" : "corners.2"}
          fontSize={ts}
          fontWeight={400}
          lineHeight={height - 2 + "px"}
          color="label.0"
          bg="background.0"
          boxShadow="elevations.1"
          css={css({
            userSelect: "none",
            appearance: "none",
            cursor: "pointer",
            "&:focus": {
              outline: 0,
            },
          })}
          value={value}
          onChange={onChange}
        >
          {children}
        </Box>
        <Icon
          data-fresco-id="select.icon"
          symbol="arrow-down-s-fill"
          size={is}
          position="absolute"
          top="50%"
          right={Math.round((height / 1.5 - is / 2) / 3) + "px"}
          color="inherit"
          css={{
            pointerEvents: "none",
            transform: "translateY(-50%)",
          }}
        />
      </Box>
      <ValidationMessage validationMessage={validationMessage} />
    </>
  );
};

Select.defaultProps = {
  height: 40,
};

export default Select;
