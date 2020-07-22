import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import { Icon } from "../../icon";
import { Text } from "../../typography";

import buttonStyles from "./buttonStyles";

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
    theme,
    ...rest
  }) => {
    const [isHovering, setIsHovering] = useState(false);

    let getBorderRadiusForControlHeight = (height) => {
      if (height <= 32) return "3px";
      return "5px";
    };

    let getTextSizeForControlHeight = (height) => {
      if (height <= 24) return 300;
      if (height <= 28) return 300;
      if (height <= 32) return 400;
      if (height <= 36) return 400;
      if (height <= 40) return 400;
      return 500;
    };

    let getIconSizeForButton = (height) => {
      if (height <= 28) return 12;
      if (height <= 32) return 12;
      if (height <= 40) return 16;
      if (height <= 48) return 18;
      return 20;
    };

    let BORDER_RADIUS = getBorderRadiusForControlHeight(height);
    let ICON_SIZE = getIconSizeForButton(height);
    let PADDING = Math.round(height / 3) + "px";
    let TEXT_SIZE = getTextSizeForControlHeight(height);

    return (
      <Text
        data-fresco-id="buttons.button"
        className={isHovering === true ? "isHovering" : ""}
        ref={ref}
        size={TEXT_SIZE}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="nowrap"
        height={height}
        m={0}
        px={PADDING}
        py={0}
        border={0}
        borderRadius={round ? 9999 : BORDER_RADIUS}
        fontWeight={500}
        lineHeight={height + "px"}
        overflow="hidden"
        css={{
          ...buttonStyles(appearance, intent, theme ? theme : useTheme()),
          textDecoration: "none",
          userSelect: "none",
          appearance: "none",
          cursor: "pointer",
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
            size={ICON_SIZE}
            mr={Math.round(ICON_SIZE * 0.3) + "px"}
            ml={"-" + Math.round(ICON_SIZE * 0.3) + "px"}
            color="inherit"
          />
        )}
        {children}
        {iconAfter && (
          <Icon
            data-fresco-id="buttons.button.iconAfter"
            as="span"
            symbol={iconAfter}
            size={ICON_SIZE}
            mr={"-" + Math.round(ICON_SIZE * 0.3) + "px"}
            ml={Math.round(ICON_SIZE * 0.3) + "px"}
            color="inherit"
          />
        )}
      </Text>
    );
  }
);

Button.propTypes = {
  appearance: PropTypes.oneOf(["default", "primary", "minimal", "subtle"])
    .isRequired,
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  iconAfter: PropTypes.node,
  iconBefore: PropTypes.node,
  intent: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "warning",
    "danger",
  ]).isRequired,
  round: PropTypes.bool,
};

Button.defaultProps = {
  appearance: "default",
  as: "button",
  height: 40,
  intent: "default",
};

export default Button;
