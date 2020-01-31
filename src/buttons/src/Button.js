import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import { Icon } from "../../icon";
import { Text } from "../../typography";

import buttonStyles from "./buttonStyles";

const getBorderRadiusForControlHeight = height => {
  if (height <= 32) return "3px";
  return "5px";
};

const getTextSizeForControlHeight = height => {
  if (height <= 24) return 300;
  if (height <= 28) return 300;
  if (height <= 32) return 400;
  if (height <= 36) return 400;
  if (height <= 40) return 400;
  return 500;
};

const getIconSizeForButton = height => {
  if (height <= 28) return 12;
  if (height <= 32) return 12;
  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
};

const Button = React.forwardRef(
  ({
    appearance,
    children,
    height,
    iconAfter,
    iconBefore,
    intent,
    ref,
    round,
    ...rest
  }) => {
    const [isHovering, setIsHovering] = useState(false);

    const br = getBorderRadiusForControlHeight(height);
    const is = getIconSizeForButton(height);
    const p = Math.round(height / 3) + "px";
    const ts = getTextSizeForControlHeight(height);

    return (
      <Text
        data-fresco-id="buttons.button"
        className={isHovering === true ? "isHovering" : ""}
        ref={ref}
        size={ts}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="nowrap"
        height={height}
        m={0}
        px={p}
        py={0}
        border={0}
        borderRadius={round ? 9999 : br}
        fontWeight={500}
        lineHeight={height + "px"}
        overflow="hidden"
        css={{
          ...buttonStyles(appearance, intent, useTheme()),
          userSelect: "none",
          appearance: "none",
          cursor: "pointer"
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        {...rest}
      >
        {iconBefore && (
          <Icon
            data-fresco-id="buttons.button.iconBefore"
            as="span"
            symbol={iconBefore}
            size={is}
            mr={Math.round(is * 0.3) + "px"}
            ml={"-" + Math.round(is * 0.3) + "px"}
            color="inherit"
          />
        )}
        {children}
        {iconAfter && (
          <Icon
            data-fresco-id="buttons.button.iconAfter"
            as="span"
            symbol={iconAfter}
            size={is}
            mr={"-" + Math.round(is * 0.3) + "px"}
            ml={Math.round(is * 0.3) + "px"}
            color="inherit"
          />
        )}
      </Text>
    );
  }
);

Button.propTypes = {
  appearance: PropTypes.oneOf(["default", "primary", "minimal"]).isRequired,
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  iconAfter: PropTypes.node,
  iconBefore: PropTypes.node,
  intent: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "warning",
    "danger"
  ]).isRequired,
  round: PropTypes.bool
};

Button.defaultProps = {
  appearance: "default",
  as: "button",
  height: 40,
  intent: "default"
};

export default Button;
