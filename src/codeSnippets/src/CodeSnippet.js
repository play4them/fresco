import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { mdiContentCopy } from "@mdi/js";

import { Box } from "../../box";
import { IconButton } from "../../buttons";
import { Text } from "../../typography";

const height = 32;

const CodeSnippet = ({ children }) => (
  <Box
    data-fresco-id="codeSnippet"
    position="relative"
    display="flex"
    borderRadius="3px"
    bg="blue.0"
  >
    <Box
      data-fresco-id="codeSnippet.container"
      display="flex"
      alignItems="center"
      flex={1}
      height={height}
      overflowX="auto"
    >
      <Text
        data-fresco-id="codeSnippet.code"
        as="code"
        size={300}
        px="spacing.4"
        fontFamily="mono"
        color="blue.7"
      >
        <Box as="pre" m={0} css={{ whiteSpace: "nowrap" }}>
          {children}
        </Box>
      </Text>
    </Box>

    <Box
      data-fresco-id="codeSnippet.gradient"
      position="absolute"
      top={0}
      right={height}
      width="32px"
      height="100%"
      color="blue.0"
      css={{
        backgroundImage: "linear-gradient(to right, transparent, currentColor)"
      }}
    />

    <CopyToClipboard text={children}>
      <IconButton
        data-fresco-id="codeSnippet.copyToClipboard"
        label="Copy to clipboard"
        icon={mdiContentCopy}
        intent="primary"
        appearance="minimal"
        height={height}
      />
    </CopyToClipboard>
  </Box>
);

export default CodeSnippet;
