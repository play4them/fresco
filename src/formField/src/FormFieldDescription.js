import React from "react";

import { Text } from "../../typography";

const FormFieldDescription = ({ description, ...rest }) => (
  <Text
    data-fresco-id="formField.description"
    as="p"
    size={300}
    mb="spacing.2"
    color="gray.7"
    {...rest}
  >
    {description}
  </Text>
);

export default FormFieldDescription;
