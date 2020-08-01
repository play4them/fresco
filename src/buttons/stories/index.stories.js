import React from "react";

import { Button, IconButton } from "..";

export default {
  title: "Buttons",
};

export const button = () => (
  <Button children="Default" intent="default" appearance="primary" />
);

export const buttonLoading = () => (
  <Button children="Default" intent="default" appearance="primary" loading />
);

export const buttonDisabled = () => (
  <Button children="Default" intent="default" appearance="primary" disabled />
);

export const iconButton = () => (
  <IconButton symbol="remixicon-fill" intent="default" appearance="default" />
);

export const iconButtonLoading = () => (
  <IconButton
    symbol="remixicon-fill"
    intent="default"
    appearance="default"
    loading
  />
);

export const iconButtonDisabled = () => (
  <IconButton
    symbol="remixicon-fill"
    intent="default"
    appearance="default"
    disabled
  />
);
