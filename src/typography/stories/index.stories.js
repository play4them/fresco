import React from "react";
import { Heading, Paragraph, Text } from "..";

export default {
  title: "Typography"
};

export const headings = () => (
  <>
    <Heading children={`Heading 900`} size={900} />
    <Heading children={`Heading 800`} size={800} />
    <Heading children={`Heading 700`} size={700} />
    <Heading children={`Heading 600`} size={600} />
    <Heading children={`Heading 500`} size={500} />
    <Heading children={`Heading 400`} size={400} />
    <Heading children={`Heading 300`} size={300} />
    <Heading children={`Heading 200`} size={200} />
    <Heading children={`Heading 100`} size={100} />
  </>
);

export const text = () => (
  <>
    <Text children={`Text 600`} size={600} display="block" />
    <Text children={`Text 500`} size={500} display="block" />
    <Text children={`Text 400`} size={400} display="block" />
    <Text children={`Text 300`} size={300} display="block" />
  </>
);

export const paragraph = () => (
  <>
    <Paragraph children={`Paragraph 600`} size={600} />
    <Paragraph children={`Paragraph 500`} size={500} />
    <Paragraph children={`Paragraph 400`} size={400} />
    <Paragraph children={`Paragraph 300`} size={300} />
  </>
);
