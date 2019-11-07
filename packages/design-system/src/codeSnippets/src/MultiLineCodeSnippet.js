import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { mdiContentCopy } from '@mdi/js';

import { Box } from '../../box';
import { IconButton } from '../../buttons';
import { Text } from '../../typography';

const MultiLineCodeSnippet = ({ children }) => (
  <Box
    data-playground-id="multiLineCodeSnippet"
    position="relative"
    borderRadius="3px"
    bg="gray.1"
  >
    <Box
      data-playground-id="multiLineCodeSnippet.container"
      flex={1}
      p="spacing.4"
      overflow="auto"
    >
      <Text
        data-playground-id="multiLineCodeSnippet.code"
        as="code"
        size={300}
        fontFamily="mono"
        color="black"
      >
        <Box as="pre" m={0}>
          {children}
        </Box>
      </Text>
    </Box>

    <CopyToClipboard text={children}>
      <IconButton
        data-playground-id="multiLineCodeSnippet.copyToClipboard"
        label="Copy to clipboard"
        icon={mdiContentCopy}
        intent="default"
        appearance="minimal"
        position="absolute"
        top={0}
        right={0}
        height={32}
      />
    </CopyToClipboard>
  </Box>
);

export default MultiLineCodeSnippet;
