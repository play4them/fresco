import React from "react";

import { Text } from "../../typography";

import pillStyles from "./pillStyles";

const Pill = ({ appearance, children, intent, ...rest }) => (
  <Text
    data-playground-id="pill"
    as="div"
    display="inline-block"
    minWidth="16px"
    px="spacing.2"
    py="spacinng.1"
    borderRadius={9999}
    fontWeight={400}
    letterSpacing="0.027em"
    textAlign="center"
    css={{
      textTransform: "uppercase",
      textDecoration: "none",
      ...pillStyles(appearance, intent)
    }}
    {...rest}
  >
    {children}
  </Text>
);

Pill.defaultProps = {
  appearance: "solid",
  intent: "default",
  size: 300
};

export default Pill;
