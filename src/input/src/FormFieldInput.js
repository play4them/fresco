import React from "react";
import uuidv4 from "uuid/v4";

import { Box } from "../../box";
import {
  FormFieldDescription,
  FormFieldHint,
  FormFieldLabel,
  FormFieldValidationMessage
} from "../../formField";

import Input from "./Input";

const FormFieldInput = ({
  description,
  hint,
  input,
  label,
  validationMessage,
  ...rest
}) => {
  const uid = uuidv4();

  return (
    <Box data-fresco-id="formFieldInput" {...rest}>
      {label && <FormFieldLabel label={label} htmlFor={uid} />}
      {description && <FormFieldDescription description={description} />}
      <Input id={uid} {...input} />
      {hint && <FormFieldHint hint={hint} />}
      {validationMessage && (
        <FormFieldValidationMessage validationMessage={validationMessage} />
      )}
    </Box>
  );
};

export default FormFieldInput;
