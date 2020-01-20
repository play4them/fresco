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
  inputProps,
  label,
  validationMessage,
  ...rest
}) => {
  const uid = uuidv4();

  return (
    <Box data-playground-id="formFieldInput" {...rest}>
      {label && <FormFieldLabel label={label} htmlFor={uid} />}
      {description && <FormFieldDescription description={description} />}
      <Input id={uid} {...inputProps} />
      {hint && <FormFieldHint hint={hint} />}
      {validationMessage && (
        <FormFieldValidationMessage validationMessage={validationMessage} />
      )}
    </Box>
  );
};

export default FormFieldInput;
