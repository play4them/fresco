import React from "react";

import { Alert, ToastAlert } from "..";

export default {
  title: "Alerts",
};

export const standard = () => (
  <Alert title="Title" caption="Caption" intent="default" close />
);

export const toast = () => (
  <ToastAlert title="Title" caption="Caption" intent="default" />
);

export const withIntent = () => (
  <ToastAlert
    title="Title"
    caption="Caption"
    intent="default"
    intent="danger"
  />
);
