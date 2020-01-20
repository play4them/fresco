import React from "react";
import { useTheme } from "emotion-theming";
import css from "@styled-system/css";
import { rgba } from "polished";
import * as Reach from "@reach/combobox";

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

const Popover = ({ children }) => (
  <Box
    data-fresco-id="combobox.popover"
    as={Reach.ComboboxPopover}
    mt="spacing.2"
    p="layout.1"
    borderRadius="5px"
    bg="gray.0"
    boxShadow="elevations.3"
  >
    {children}
  </Box>
);

// List
const List = ({ children }) => (
  <Box
    data-fresco-id="combobox.list"
    as={Reach.ComboboxList}
    m={0}
    p={0}
    css={{ listStyle: "none" }}
  >
    {children}
  </Box>
);

// Option
const Option = ({ decoration, value }) => (
  <Text
    data-fresco-id="combobox.list.item"
    as={Reach.ComboboxOption}
    value={value}
    size={500}
    px="spacing.3"
    py="spacing.3"
    borderRadius="3px"
    css={css({
      "&[data-highlighted]": {
        color: "blue.6",
        bg: "blue.0"
      },
      '[data-suggested-value="true"]': {
        fontWeight: 400
      },
      '[data-user-value="true"]': {
        fontWeight: 700
      }
    })}
  >
    {decoration}
    <Reach.ComboboxOptionText />
  </Text>
);

const Combobox = ({
  bg,
  height,
  iconAfter,
  iconBefore,
  inputProps,
  items,
  openOnFocus,
  placeholder,
  width,
  ...rest
}) => {
  const theme = useTheme();
  let br = getBorderRadiusForControlHeight(height);
  let is = getIconSizeForButton(height);
  let p = Math.round(height / 4);
  let ts = getTextSizeForControlHeight(height);

  return (
    <Reach.Combobox
      data-fresco-id="combobox"
      openOnFocus={openOnFocus}
      css={css({
        position: "relative",
        width: width,
        borderRadius: br,
        bg: bg,
        overflow: "hidden",
        boxShadow: `${rgba(theme.colors.gray[9], 0.1)} 
          0 0 0 1px inset, 
          ${rgba(theme.colors.gray[9], 0.1)}
          0 1px 2px inset`
      })}
      {...rest}
    >
      {iconBefore && (
        <Box
          data-fresco-id="combobox.iconBefore"
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
        data-fresco-id="combobox.input"
        as={Reach.ComboboxInput}
        placeholder={placeholder}
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
        {...inputProps}
      />
      {iconAfter && (
        <Box
          data-fresco-id="combobox.iconAfter"
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
      <Popover>
        <List>
          {items.map((item, index) => (
            <Option
              value={item.value}
              decoration={item.decoration}
              key={index}
            />
          ))}
        </List>
      </Popover>
    </Reach.Combobox>
  );
};

Combobox.defaultProps = {
  bg: "gray.0",
  height: 40
};

export default Combobox;
