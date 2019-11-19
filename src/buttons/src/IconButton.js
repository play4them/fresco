import React from 'react';
import { mdiCheckCircle } from '@mdi/js';

import { Icon } from '../../icon';

import Button from './Button';

const getIconSizeForButton = height => {
  if (height <= 28) return 14;
  if (height <= 32) return 16;
  if (height <= 40) return 20;
  if (height <= 48) return 24;
  return 24;
};

const IconButton = ({ height, icon, label, ...rest }) => {
  const is = getIconSizeForButton(height);

  return (
    <Button
      data-fresco-id="buttons.iconButton"
      width={height}
      height={height}
      px={0}
      {...rest}
    >
      <Icon
        data-fresco-id="buttons.iconButton.icon"
        as="span"
        symbol={icon}
        label={label}
        size={is}
        color="inherit"
      />
    </Button>
  );
};

IconButton.defaultProps = {
  appearance: 'default',
  borderRadius: '50%',
  height: 40,
  icon: mdiCheckCircle,
  intent: 'default',
};

export default IconButton;
