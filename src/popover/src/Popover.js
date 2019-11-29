import React from "react";
import * as Reach from "@reach/popover";

import { Box } from "../../box";
import { Button } from "../../buttons";
import { Heading, Text } from "../../typography";

const Popover = ({ children }) => {
  return <Reach.Popover>{children}</Reach.Popover>;
};

export default Popover;
