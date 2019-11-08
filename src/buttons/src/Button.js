import React from 'react';

import { Icon } from '../../icon';
import { Text } from '../../typography';

import buttonStyles from './buttonStyles';

const getBorderRadiusForControlHeight = height => {
  if (height <= 40) return '3px';
  return '5px';
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
  if (height <= 28) return 12;
  if (height <= 32) return 12;
  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
};

const Button = ({
  appearance,
  children,
  height,
  iconAfter,
  iconBefore,
  intent,
  ...rest
}) => {
  const br = getBorderRadiusForControlHeight(height);
  const is = getIconSizeForButton(height);
  const p = Math.round(height / 2);
  const ts = getTextSizeForControlHeight(height);

  return (
    <Text
      data-playground-id="buttons.button"
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
      borderRadius={br}
      fontWeight={600}
      lineHeight={height + 'px'}
      overflow="hidden"
      css={{
        ...buttonStyles(appearance, intent),
        userSelect: 'none',
        appearance: 'none',
        cursor: 'pointer',
        ':focus': {
          outline: '1px dotted currentColor',
          outlineOffset: '-4px',
        },
      }}
      {...rest}
    >
      {iconBefore && (
        <Icon
          data-playground-id="buttons.button.iconBefore"
          as="span"
          symbol={iconBefore}
          size={is}
          mr={Math.round(is * 0.3) + 'px'}
          ml={'-' + Math.round(is * 0.3) + 'px'}
          color="inherit"
        />
      )}
      {children}
      {iconAfter && (
        <Icon
          data-playground-id="buttons.button.iconAfter"
          as="span"
          symbol={iconAfter}
          size={is}
          mr={'-' + Math.round(is * 0.3) + 'px'}
          ml={Math.round(is * 0.3) + 'px'}
          color="inherit"
        />
      )}
    </Text>
  );
};

Button.defaultProps = {
  appearance: 'default',
  as: 'button',
  height: 40,
  intent: 'default',
};

export default Button;
