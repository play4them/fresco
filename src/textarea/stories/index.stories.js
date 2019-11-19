import React from "react";
import { Box } from "../../box";
import { FormFieldTextarea, Textarea } from "..";

export default {
  title: "Textarea"
};

export const standard = () => (
  <Box p={64}>
    <Textarea placeholder="Placeholder" />
  </Box>
);

export const formFieldTextarea = () => (
  <FormFieldTextarea
    label="Message"
    description="Write a message to your donors"
    textarea={{ placeholder: "Your message..." }}
    hint="This could be a message of thanks or congratulations"
    validationMessage="This field is required"
  />
);
