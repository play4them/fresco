import React from "react";
import uuidv4 from "uuid/v4";

import { Box, Input } from "../..";

import {
  FormFieldDescription,
  FormFieldHint,
  FormFieldLabel,
  FormFieldValidationMessage
} from "..";

export default {
  title: "Form Field"
};

export const standard = () => {
  const uid = uuidv4();

  return (
    <Box p="layout.4">
      <FormFieldLabel label="Field label" htmlFor={uid} />
      <FormFieldDescription description="Description of field" />
      <Input placeholder="Placeholder" id={uid} />
      <FormFieldHint hint="Some help about what to input" />
      <FormFieldValidationMessage validationMessage="Error handling here" />
    </Box>
  );
};
