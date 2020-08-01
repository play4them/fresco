import React from "react";

import { Avatar } from "..";

export default {
  title: "Avatar",
};

export const name = () => <Avatar name="Sarah Li" size={64} />;

export const blurHash = () => (
  <Avatar name="Sarah Li" blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" size={64} />
);
