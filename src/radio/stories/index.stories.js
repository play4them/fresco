import React from "react";
import { FormFieldRadioGroup, Radio, RadioGroup } from "..";

export default {
  title: "Radio"
};

export const regular = () => <Radio>Just a regular radio by itself</Radio>;

export const group = () => (
  <RadioGroup
    options={[
      {
        label: "Option 1",
        value: 1
      },
      {
        label: "Option 2",
        value: 2
      }
    ]}
  />
);

export const groupStack = () => (
  <RadioGroup
    options={[
      {
        label: "Option 1",
        value: 1
      },
      {
        label: "Option 2",
        value: 2
      }
    ]}
    stack
  />
);

export const formFieldRadioGroup = () => (
  <FormFieldRadioGroup
    label="Message"
    description="Write a message to your donors"
    radioGroupProps={{
      options: [
        {
          label: "Option 1",
          value: 1
        },
        {
          label: "Option 2",
          value: 2
        }
      ],
      stack: true
    }}
    hint="This could be a message of thanks or congratulations"
    validationMessage={{ message: "This field is required", intent: "danger" }}
  />
);
