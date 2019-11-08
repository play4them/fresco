import React from 'react';
import { Box } from '../../box';
import { Textarea } from '..';

export default {
  title: 'Textarea',
};

export const standard = () => (
  <Box p={64}>
    <Textarea placeholder="Placeholder" />
  </Box>
);
