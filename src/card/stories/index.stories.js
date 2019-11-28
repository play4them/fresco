import React from "react";
import { Text } from "../..";
import { Card } from "..";

export default {
  title: "Card"
};

export const standard = () => (
  <Card width={128} height={128} m="layout.4" p="layout.3" elevation={3}>
    <Text>Card</Text>
  </Card>
);
