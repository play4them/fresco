import React from "react";

import { AvatarGroup } from "..";

export default {
  title: "Avatar Group",
};

export const standard = () => (
  <AvatarGroup
    avatars={[
      { name: "Jesse McLean" },
      { name: "Brett Klassen" },
      { name: "Bryton Udy" },
      { name: "Andrew Reist" },
    ]}
    size={32}
    max={3}
    overlap={12}
  />
);
