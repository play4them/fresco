import React from 'react';
import { Text } from '../../typography';

import badgeStyles from './badgeStyles';

const Badge = ({ appearance, children, intent, ...rest }) => (
  <Text
    data-playground-id="badge"
    as="div"
    display="inline-block"
    px="spacing.2"
    py="spacinng.1"
    borderRadius="2px"
    fontWeight={600}
    letterSpacing="0.054em"
    textAlign="center"
    css={{
      textTransform: 'uppercase',
      textDecoration: 'none',
      ...badgeStyles(appearance, intent),
    }}
    {...rest}
  >
    {children}
  </Text>
);

Badge.defaultProps = {
  appearance: 'subtle',
  intent: 'default',
  size: 300,
};

export default Badge;
