import React from "react";

import { Paragraph } from "../../typography";

const FormFieldDescription = ({ description, ...rest }) => (
  <Paragraph
    data-fresco-id="formField.description"
    as="p"
    size={300}
    mb="spacing.2"
    color="gray.8"
    {...rest}
  >
    {description}
  </Paragraph>
);

export default FormFieldDescription;
