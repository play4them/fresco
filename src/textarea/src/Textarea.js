import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import css from "@styled-system/css";
import { useTheme } from "emotion-theming";

import { ValidationMessage } from "../../validationMessage";

function Textarea({
  id,
  type,
  maxRows,
  minRows,
  placeholder,
  validationMessage,
  ...rest
}) {
  const [isHovering, setIsHovering] = useState(false);
  const THEME = useTheme();

  return (
    <>
      <TextareaAutosize
        data-fresco-id="textarea"
        className={isHovering === true ? "isHovering" : undefined}
        maxRows={maxRows}
        minRows={minRows}
        id={id}
        placeholder={placeholder}
        css={css({
          width: "100%",
          minHeight: 40 + "px",
          px: "spacing.4",
          py: "9px",
          borderWidth: 1,
          borderColor: "fill.0",
          borderRadius: "corners.2",
          overflow: "hidden",
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 24 + "px",
          color: "label.0",
          bg: "background.0",
          transition:
            "border-color 200ms ease-out, background-color 200ms ease-out, color 200ms ease-out",
          "&:focus": {
            borderColor: "tint.blue",
            outline: 0,
            boxShadow: `inset 0 0 0 2px ${THEME.colors.fill[0]}`,
          },
          "&.isHovering": {
            borderColor: "fill.3",
            "&:focus": {
              borderColor: "tint.blue",
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

export default Textarea;
