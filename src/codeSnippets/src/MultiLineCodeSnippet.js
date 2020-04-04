import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { mdiContentCopy } from "@mdi/js";

import { Box } from "../../box";
import { IconButton } from "../../buttons";
import { Text } from "../../typography";

const MultiLineCodeSnippet = ({ children }) => (
  <Box
    data-fresco-id="multiLineCodeSnippet"
    position="relative"
    borderRadius="3px"
    bg="blue.0"
  >
    <Box
      data-fresco-id="multiLineCodeSnippet.container"
      flex={1}
      p="spacing.4"
      overflow="auto"
    >
      <Text
        data-fresco-id="multiLineCodeSnippet.code"
        as="code"
        size={300}
        fontFamily="mono"
        color="blue.9"
      >
        <Box as="pre" m={0}>
          {children}
        </Box>
      </Text>
    </Box>

    <CopyToClipboard text={children}>
      <IconButton
        data-fresco-id="multiLineCodeSnippet.copyToClipboard"
        label="Copy to clipboard"
        icon={mdiContentCopy}
        intent="primary"
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
