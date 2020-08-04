import React, { useState } from "react";
import css from "@styled-system/css";
import { useTheme } from "emotion-theming";

import { Box } from "../../box";
import { ValidationMessage } from "../../validationMessage";

function TextInput({ id, type, placeholder, validationMessage, ...rest }) {
  const [isHovering, setIsHovering] = useState(false);
  const THEME = useTheme();

  return (
    <>
      <Box
        data-fresco-id="textInput"
        className={isHovering === true ? "isHovering" : undefined}
        as="input"
        id={id}
        type={type}
        placeholder={placeholder}
        width="100%"
        height={40}
        px="spacing.4"
        py={0}
        borderWidth={1}
        borderColor="fill.0"
        borderRadius="corners.2"
        overflow="hidden"
        fontSize={16}
        fontWeight={400}
        lineHeight={20 + "px"}
        color="label.0"
        bg="background.0"
        css={css({
          transition:
            "border-color 200ms ease-out, background-color 200ms ease-out, color 200ms ease-out",
          "&:focus": {
            borderColor: "tint.indigo",
            outline: 0,
            boxShadow: `inset 0 0 0 2px ${THEME.colors.fill[0]}`,
          },
          "&.isHovering": {
            borderColor: "fill.3",
            "&:focus": {
              borderColor: "tint.indigo",
            },
          },
          "::placeholder": {
            color: "placeholderText",
            opacity: 1,
          },
        })}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        {...rest}
      />
      <ValidationMessage validationMessage={validationMessage} />
    </>
  );
}

export default TextInput;
