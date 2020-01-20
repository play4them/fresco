import React from "react";

import { Heading } from "../../typography";

const FormFieldLabel = ({ label, ...rest }) => (
  <Heading
    data-playground-id="formField.label"
    as="label"
    size={300}
    mb="spacing.1"
    color="gray.8"
    {...rest}
  >
    {label}
  </Heading>
);

export default FormFieldLabel;
