import React from "react";

import { Heading } from "../../typography";

const FormFieldLabel = ({ label, ...rest }) => (
  <Heading
    data-fresco-id="formField.label"
    as="label"
    size={400}
    display="inline-block"
    mb="spacing.1"
    {...rest}
  >
    {label}
  </Heading>
);

export default FormFieldLabel;
