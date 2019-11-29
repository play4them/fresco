import React from "react";
import uuidv4 from "uuid/v4";

import { Box } from "../../box";
import {
  FormFieldDescription,
  FormFieldHint,
  FormFieldLabel,
  FormFieldValidationMessage
} from "../../formField";

import Select from "./Select";

const FormFieldSelect = ({
  description,
  hint,
  selectProps,
  label,
  validationMessage,
  ...rest
}) => {
  const uid = uuidv4();

  return (
    <Box data-fresco-id="formFieldSelect" {...rest}>
      {label && <FormFieldLabel label={label} htmlFor={uid} />}
      {description && <FormFieldDescription description={description} />}
      <Select id={uid} {...selectProps} />
      {hint && <FormFieldHint hint={hint} />}
      {validationMessage && (
        <FormFieldValidationMessage validationMessage={validationMessage} />
      )}
    </Box>
  );
};

export default FormFieldSelect;
