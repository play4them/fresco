import React from "react";
import uuidv4 from "uuid/v4";

import { Box } from "../../box";
import {
  FormFieldDescription,
  FormFieldHint,
  FormFieldLabel,
  FormFieldValidationMessage
} from "../../formField";

import Textarea from "./Textarea";

const FormFieldTextarea = ({
  description,
  hint,
  label,
  textarea,
  validationMessage,
  ...rest
}) => {
  const uid = uuidv4();

  return (
    <Box data-fresco-id="formFieldTextarea" {...rest}>
      {label && <FormFieldLabel label={label} htmlFor={uid} />}
      {description && <FormFieldDescription description={description} />}
      <Textarea id={uid} {...textarea} />
      {hint && <FormFieldHint hint={hint} />}
      {validationMessage && (
        <FormFieldValidationMessage validationMessage={validationMessage} />
      )}
    </Box>
  );
};

export default FormFieldTextarea;
