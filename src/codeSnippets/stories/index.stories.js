import React from 'react';
import { Paragraph } from '../..';

import { CodeSnippet, InlineCodeSnippet, MultiLineCodeSnippet } from '..';

export default {
  title: 'Code Snippet',
};

export const single = () => (
  <CodeSnippet>
    {`<Box
  data-playground-id="codeSnippet"
  position="relative"
  display="flex"
  pl="spacing.4"
  borderColor="gray.1"
  borderRadius="3px"
  color="black"
  bg="gray.1"
>
  <Box
    data-playground-id="codeSnippet.container"
    display="flex"
    alignItems="center"
    flex={1}
  >
    <Text
      data-playground-id="codeSnippet.code"
      as="code"
      size={400}
      px="spacing.2"
      fontFamily="mono"
      fontSize="0.875em"
    >
      {children}
    </Text>
  </Box>
  <Box>
    <IconButton
      icon={mdiContentCopy}
      intent="default"
      appearance="minimal"
      size={40}
    />
  </Box>
</Box>`}
  </CodeSnippet>
);

export const inline = () => (
  <Paragraph>
    Use this design system by installing it with{' '}
    <InlineCodeSnippet>yarn add @onrecess/playground</InlineCodeSnippet>. Then
    import components directly using{' '}
    <InlineCodeSnippet>
      {`import { Box } from "@onrecess/playground"`}
    </InlineCodeSnippet>
    .
  </Paragraph>
);

export const multiLine = () => (
  <MultiLineCodeSnippet>
    {`<Box
  data-playground-id="codeSnippet"
  position="relative"
  display="flex"
  pl="spacing.4"
  borderColor="gray.1"
  borderRadius="3px"
  color="black"
  bg="gray.1"
>
  <Box
    data-playground-id="codeSnippet.container"
    display="flex"
    alignItems="center"
    flex={1}
  >
    <Text
      data-playground-id="codeSnippet.code"
      as="code"
      size={400}
      px="spacing.2"
      fontFamily="mono"
      fontSize="0.875em"
    >
      {children}
    </Text>
  </Box>
  <Box>
    <IconButton
      icon={mdiContentCopy}
      intent="default"
      appearance="minimal"
      size={40}
    />
  </Box>
</Box>`}
  </MultiLineCodeSnippet>
);
