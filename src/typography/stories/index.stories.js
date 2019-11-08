import React from 'react';
import { Heading, Paragraph, Text } from '..';

export default {
  title: 'Typography',
};

export const headings = () => (
  <>
    <Heading children={`Heading 900`} size={900} mt={null} />
    <Heading children={`Heading 800`} size={800} mt={null} />
    <Heading children={`Heading 700`} size={700} mt={null} />
    <Heading children={`Heading 600`} size={600} mt={null} />
    <Heading children={`Heading 500`} size={500} mt={null} />
    <Heading children={`Heading 400`} size={400} mt={null} />
    <Heading children={`Heading 300`} size={300} mt={null} />
    <Heading children={`Heading 200`} size={200} mt={null} />
    <Heading children={`Heading 100`} size={100} mt={null} />
  </>
);

export const text = () => (
  <>
    <Text children={`Text 600`} size={600} display="block" mt={null} />
    <Text children={`Text 500`} size={500} display="block" mt={null} />
    <Text children={`Text 400`} size={400} display="block" mt={null} />
    <Text children={`Text 300`} size={300} display="block" mt={null} />
  </>
);

export const paragraph = () => (
  <>
    <Paragraph children={`Paragraph 600`} size={600} mt={null} />
    <Paragraph children={`Paragraph 500`} size={500} mt={null} />
    <Paragraph children={`Paragraph 400`} size={400} mt={null} />
    <Paragraph children={`Paragraph 300`} size={300} mt={null} />
  </>
);
