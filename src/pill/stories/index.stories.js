import React from "react";
import { Pill } from "..";

export default {
  title: "Pill"
};

export const solid = () => (
  <>
    <Pill children={1} />
    <Pill children={2} intent="primary" />
    <Pill children={3} intent="success" />
    <Pill children={4} intent="warning" />
    <Pill children={10} intent="danger" />
  </>
);

export const subtle = () => (
  <>
    <Pill children={1} appearance="subtle" />
    <Pill children={2} appearance="subtle" intent="primary" />
    <Pill children={3} appearance="subtle" intent="success" />
    <Pill children={4} appearance="subtle" intent="warning" />
    <Pill children={10} appearance="subtle" intent="danger" />
  </>
);
