import React from 'react';
import Tooltip from '@reach/tooltip';

const Comp = ({ children, label }) => (
  <Tooltip label={label}>{children}</Tooltip>
);

export default Comp;
