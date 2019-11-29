import React from "react";
import { mdiMagnify } from "@mdi/js";

import { Button } from "../../buttons";
import { Menu } from "..";

export default {
  title: "Menu"
};

export const standard = () => (
  <>
    <Menu>
      <Button>Menu</Button>
    </Menu>
  </>
);
