import React from "react";

import { Paragraph } from "../../typography";

const FormFieldHint = ({ hint, ...rest }) => (
  <Paragraph
    data-fresco-id="formField.hint"
    as="p"
    size={300}
    mt="spacing.2"
    color="gray.6"
    {...rest}
  >
    {hint}
  </Paragraph>
);

export default FormFieldHint;
