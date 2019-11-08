import React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import * as MaterialIcon from '@mdi/react';

import { Box } from '../../box';

const Icon = ({ color, label, size, symbol, ...rest }) => (
  <Box
    data-playground-id="icon"
    width={size}
    height={size}
    color={color}
    {...rest}
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    <MaterialIcon.Icon
      path={symbol}
      size={null}
      css={{
        width: size,
        height: size,
        verticalAlign: 'top',
        color: 'inherit',
        fill: 'currentColor',
      }}
    />
  </Box>
);

Icon.defaultProps = {
  color: 'black',
  size: 24,
  symbol: '',
};

export default Icon;
