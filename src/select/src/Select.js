import React from "react";
import { mdiMenuDown } from "@mdi/js";

import { Box } from "../../box";
import { Icon } from "../../icon";
import { Text } from "../../typography";

const getBorderRadiusForControlHeight = height => {
  if (height <= 40) return "3px";
  return "5px";
};

const getTextSizeForControlHeight = height => {
  if (height <= 24) return 300;
  if (height <= 28) return 300;
  if (height <= 32) return 300;
  if (height <= 36) return 400;
  if (height <= 40) return 400;
  return 500;
};

const getIconSizeForButton = height => {
  if (height <= 28) return 16;
  if (height <= 32) return 16;
  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
};

const Select = ({ children, height, id, round, ...rest }) => {
  const br = getBorderRadiusForControlHeight(height);
  const is = getIconSizeForButton(height);
  const ts = getTextSizeForControlHeight(height);

  return (
    <Box
      data-fresco-id="select"
      position="relative"
      display="inline-flex"
      {...rest}
    >
      <Text
        data-fresco-id="select.control"
        as="select"
        id={id}
        size={ts}
        width="100%"
        height={height}
        m={0}
        pl={Math.round(height / 4) + "px"}
        pr={Math.round(height / 1.5) + "px"}
        py={0}
        border={0}
        borderRadius={round ? 9999 : br}
        fontWeight={600}
        lineHeight={height + "px"}
        boxShadow="elevations.1"
        css={{
          userSelect: "none",
          appearance: "none",
          cursor: "pointer"
        }}
      >
        {children}
      </Text>
      <Icon
        data-fresco-id="select.icon"
        as="span"
        symbol={mdiMenuDown}
        size={is}
        position="absolute"
        top="50%"
        right={Math.round((height / 1.5 - is / 2) / 3) + "px"}
        color="inherit"
        css={{
          pointerEvents: "none",
          transform: "translateY(-50%)"
        }}
      />
    </Box>
  );
};

Select.defaultProps = {
  height: 32,
  size: 300
};

export default Select;
