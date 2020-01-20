import React from "react";

import { Text } from "../../typography";

const FormFieldHint = ({ hint, ...rest }) => (
  <Text
    data-fresco-id="formField.hint"
    as="p"
    size={300}
    mt="spacing.2"
    color="gray.6"
    {...rest}
  >
    {hint}
  </Text>
);

export default FormFieldHint;
