import React from 'react';
import { mdiMagnify } from '@mdi/js';
import { Box } from '../../box';
import { Input } from '..';

export default {
  title: 'Input',
};

export const standard = () => (
  <Box p={64}>
    <Input placeholder="Placeholder" />
  </Box>
);

export const iconBefore = () => (
  <Box p={64}>
    <Input
      placeholder="Search by username or email..."
      iconBefore={mdiMagnify}
    />
  </Box>
);

export const iconAfter = () => (
  <Box p={64}>
    <Input
      placeholder="Search by username or email..."
      iconAfter={mdiMagnify}
    />
  </Box>
);

export const iconBeforeHeight = () => (
  <Box p={64}>
    <Input
      placeholder="Search by username or email..."
      iconBefore={mdiMagnify}
      height={48}
    />
  </Box>
);
