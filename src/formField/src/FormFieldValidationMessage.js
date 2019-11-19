import React from "react";
import { mdiAlertCircle } from "@mdi/js";

import { Box } from "../../box";
import { Icon } from "../../icon";
import { Paragraph } from "../../typography";

const FormFieldValidationMessage = ({ validationMessage, ...rest }) => (
  <Box
    data-fresco-id="formField.validationMessage"
    display="flex"
    alignItems="flex-start"
    mt="spacing.2"
  >
    <Icon symbol={mdiAlertCircle} size={16} mr="spacing.2" color="red.5" />
    <Paragraph as="p" size={300} flex={1} color="red.7" {...rest}>
      {validationMessage}
    </Paragraph>
  </Box>
);

export default FormFieldValidationMessage;
