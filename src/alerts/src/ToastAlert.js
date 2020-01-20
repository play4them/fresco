import React from 'react';
import Portal from '@reach/portal';

import { Box } from '../../box';

import Alert from './Alert';

const ToastAlert = ({ ...rest }) => (
  <Portal>
    <Box
      data-fresco-id="toastAlert"
      position="fixed"
      top="spacing.3"
      left={0}
      width="100%"
      px="spacing.3"
      textAlign="center"
      css={{ pointerEvents: 'none' }}
    >
      <Box
        display="inline-block"
        maxWidth={420}
        textAlign="initial"
        css={{ pointerEvents: 'all' }}
      >
        <Alert boxShadow="elevations.4" {...rest} />
      </Box>
    </Box>
  </Portal>
);

export default ToastAlert;
