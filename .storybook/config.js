import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import { GlobalStyles, Theme } from "../src";

addDecorator(story => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      {story()}
    </>
  </ThemeProvider>
));

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
