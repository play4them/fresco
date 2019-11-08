import React from 'react';
import { Box } from '../../box';

import { AspectRatio } from '..';

export default {
  title: 'Aspect Ratio',
};

export const ratio16x9 = () => (
  <Box maxWidth={512}>
    <AspectRatio ratio="16:9" bg="gray.1">
      <Box
        as="img"
        src="https://source.unsplash.com/random"
        width="100%"
        height="100%"
        css={{ objectFit: 'cover' }}
      />
    </AspectRatio>
  </Box>
);

export const ratio4x3 = () => (
  <Box maxWidth={512}>
    <AspectRatio ratio="4:3" bg="gray.1">
      <Box
        as="img"
        src="https://source.unsplash.com/random"
        width="100%"
        height="100%"
        css={{ objectFit: 'cover' }}
      />
    </AspectRatio>
  </Box>
);
