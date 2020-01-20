import React from "react";

import { Box } from "../../box";
import {
  FormFieldDescription,
  FormFieldHint,
  FormFieldLabel,
  FormFieldValidationMessage
} from "../../formField";

import RadioGroup from "./RadioGroup";

const FormFieldRadioGroup = ({
  description,
  hint,
  label,
  radioGroupProps,
  validationMessage,
  ...rest
}) => {
  return (
    <Box data-playground-id="formFieldRadioGroup" {...rest}>
      {label && <FormFieldLabel label={label} />}
      {description && <FormFieldDescription description={description} />}
      <RadioGroup {...radioGroupProps} />
      {hint && <FormFieldHint hint={hint} />}
      {validationMessage && (
        <FormFieldValidationMessage validationMessage={validationMessage} />
      )}
    </Box>
  );
};

export default FormFieldRadioGroup;
