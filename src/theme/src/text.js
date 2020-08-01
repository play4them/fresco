import capsize from "capsize";

import breakpoints from "./breakpoints";

const fontMetrics = {
  capHeight: 2048,
  ascent: 2728,
  descent: -680,
  lineGap: 0,
  unitsPerEm: 2816,
};

export default {
  "600": {
    fontWeight: 400,
    letterSpacing: "-0.015em",
    ...capsize({
      fontMetrics,
      capHeight: 14,
      lineGap: 8,
    }),
    [`@media screen and (min-width: ${breakpoints.md})`]: {
      ...capsize({
        fontMetrics,
        capHeight: 16,
        lineGap: 8,
      }),
    },
  },
  "500": {
    fontWeight: 400,
    letterSpacing: "-0.015em",
    ...capsize({
      fontMetrics,
      capHeight: 12,
      lineGap: 8,
    }),
  },
  "400": {
    fontWeight: 400,
    letterSpacing: "-0.015em",
    ...capsize({
      fontMetrics,
      capHeight: 10,
      lineGap: 8,
    }),
  },
  "300": {
    fontWeight: 400,
    letterSpacing: "-0.015em",
    ...capsize({
      fontMetrics,
      capHeight: 8,
      lineGap: 8,
    }),
  },
};
