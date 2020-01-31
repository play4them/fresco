import React from "react";
import { Toggle } from "..";

export default {
  title: "Toggle"
};

export const regular = () => <Toggle>Turn on notifications</Toggle>;

export const small = () => <Toggle small>Dark Mode</Toggle>;
