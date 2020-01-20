import React from "react";
import uuidv4 from "uuid/v4";

import { Box } from "../../box";
import {
  FormFieldDescription,
  FormFieldHint,
  FormFieldLabel,
  FormFieldValidationMessage
} from "../../formField";

import Combobox from "./Combobox";

const FormFieldCombobox = ({
  description,
  hint,
  comboboxProps,
  label,
  validationMessage,
  ...rest
}) => {
  const uid = uuidv4();

  return (
    <Box data-fresco-id="formFieldCombobox" {...rest}>
      {label && <FormFieldLabel label={label} htmlFor={"listbox--" + uid} />}
      {description && <FormFieldDescription description={description} />}
      <Combobox id={uid} {...comboboxProps} />
      {hint && <FormFieldHint hint={hint} />}
      {validationMessage && (
        <FormFieldValidationMessage validationMessage={validationMessage} />
      )}
    </Box>
  );
};

export default FormFieldCombobox;
