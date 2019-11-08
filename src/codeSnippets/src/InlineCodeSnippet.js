import React from 'react';

import { Box } from '../../box';

const InlineCodeSnippet = ({ children }) => (
  <Box
    data-playground-id="inlineCodeSnippet"
    as="button"
    position="relative"
    display="inline"
    m={0}
    p={0}
    border="2px solid"
    borderColor="gray.1"
    borderRadius="3px"
    fontFamily="mono"
    fontSize="0.875em"
    verticalAlign="baseline"
    color="black"
    bg="gray.1"
  >
    <Box data-playground-id="inlineCodeSnippet.code" as="code" px="spacing.2">
      {children}
    </Box>
  </Box>
);

export default InlineCodeSnippet;
