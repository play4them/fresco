import React from "react";

import { Alert, ToastAlert } from "..";

export default {
  title: "Alert"
};

export const standard = () => (
  <Alert title="Default Alert">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </Alert>
);

export const primary = () => (
  <Alert title="Primary Alert" intent="primary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </Alert>
);

export const success = () => (
  <Alert title="Success Alert" intent="success">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </Alert>
);

export const warning = () => (
  <Alert title="Warning Alert" intent="warning">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </Alert>
);

export const danger = () => (
  <Alert
    title="Danger Alert"
    buttonProps={{
      children: "Try Again"
    }}
    intent="danger"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </Alert>
);

export const toast = () => (
  <ToastAlert title="Toast Alert" intent="warning">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </ToastAlert>
);
