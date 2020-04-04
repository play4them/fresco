import React from "react";

import { Box } from "../../box";

function Spacer({ space, spaceX, spaceY }) {
  return (
    <Box
      data-fresco-id="spacer"
      flex={1}
      pb={spaceY || space}
      pl={spaceX || space}
    />
  );
}

export default Spacer;
