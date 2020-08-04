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
  "900": {
    fontWeight: 700,
    letterSpacing: "-0.03em",
    ...capsize({
      fontMetrics,
      capHeight: 24,
      lineGap: 10,
    }),
    [`@media screen and (min-width: ${breakpoints.md})`]: {
      ...capsize({
        fontMetrics,
        capHeight: 32,
        lineGap: 12,
      }),
    },
    [`@media screen and (min-width: ${breakpoints.lg})`]: {
      ...capsize({
        fontMetrics,
        capHeight: 40,
        lineGap: 12,
      }),
    },
  },
  "800": {
    fontWeight: 700,
    letterSpacing: "-0.03em",
    ...capsize({
      fontMetrics,
      capHeight: 20,
      lineGap: 10,
    }),
    [`@media screen and (min-width: ${breakpoints.md})`]: {
      ...capsize({
        fontMetrics,
        capHeight: 24,
        lineGap: 12,
      }),
    },
    [`@media screen and (min-width: ${breakpoints.lg})`]: {
      ...capsize({
        fontMetrics,
        capHeight: 32,
        lineGap: 12,
      }),
    },
  },
  "700": {
    fontWeight: 700,
    letterSpacing: "-0.03em",
    ...capsize({
      fontMetrics,
      capHeight: 18,
      lineGap: 8,
    }),
    [`@media screen and (min-width: ${breakpoints.md})`]: {
      ...capsize({
        fontMetrics,
        capHeight: 20,
        lineGap: 10,
      }),
    },
    [`@media screen and (min-width: ${breakpoints.lg})`]: {
      ...capsize({
        fontMetrics,
        capHeight: 24,
        lineGap: 10,
      }),
    },
  },
  "600": {
    fontWeight: 700,
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
    [`@media screen and (min-width: ${breakpoints.lg})`]: {
      ...capsize({
        fontMetrics,
        capHeight: 18,
        lineGap: 8,
      }),
    },
  },
  "500": {
    fontWeight: 600,
    letterSpacing: "-0.015em",
    ...capsize({
      fontMetrics,
      capHeight: 12,
      lineGap: 6,
    }),
  },
  "400": {
    fontWeight: 600,
    letterSpacing: "-0.015em",
    ...capsize({
      fontMetrics,
      capHeight: 10,
      lineGap: 6,
    }),
  },
  "300": {
    fontWeight: 600,
    letterSpacing: "-0.015em",
    ...capsize({
      fontMetrics,
      capHeight: 8,
      lineGap: 4,
    }),
  },
  "100": {
    fontWeight: 600,
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    ...capsize({
      fontMetrics,
      capHeight: 8,
      lineGap: 4,
    }),
  },
};
