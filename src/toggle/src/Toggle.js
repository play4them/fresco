import React from "react";
import { useTheme } from "emotion-theming";
import uuidv4 from "uuid/v4";
import Switch from "react-switch";

import { Box } from "../../box";
import { Text } from "../../typography";

const getOffsetForTextSize = size => {
  if (size <= 300) return 4;
  if (size <= 400) return 2;
  if (size <= 500) return 2;
  if (size <= 600) return 0;
  return 0;
};

const Toggle = ({ children, size, width, ...rest }) => {
  const controlWidth = 40;
  const controlHeight = 24;

  const theme = useTheme();
  const uid = uuidv4();
  const p = getOffsetForTextSize(size) + "px";

  const config = {
    offColor: theme.colors.gray[4],
    onColor: theme.colors.green[5],
    offHandleColor: "#fff",
    onHandleColor: "#fff",
    handleDiameter: controlHeight - 4,
    uncheckedIcon: false,
    checkedIcon: false,
    width: controlWidth,
    height: controlHeight
  };

  return (
    <Text
      data-fresco-id="toggle"
      as="label"
      htmlFor={uid}
      size={size}
      display="inline-flex"
      justifyContent="space-between"
      width={width}
      css={{ userSelect: "none", cursor: "pointer" }}
    >
      {children && (
        <Box data-fresco-id="toggle.label" flex={1} pt={p}>
          {children}
        </Box>
      )}
      <Box
        data-fresco-id="toggle.control"
        width={controlWidth}
        height={controlHeight}
        ml={children && "spacing.3"}
      >
        <Switch id={uid} {...config} {...rest} />
      </Box>
    </Text>
  );
};

Toggle.defaultProps = {
  size: 400
};

export default Toggle;
