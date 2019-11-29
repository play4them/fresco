import React from "react";

import { Button } from "../../buttons";
import { Popover } from "..";

export default {
  title: "Popover"
};

export const standard = () => (
  <>
    <Popover>
      <Button>Menu</Button>
    </Popover>
  </>
);
