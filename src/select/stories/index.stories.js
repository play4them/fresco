import React from "react";
import { FormFieldSelect, Select } from "..";

export default {
  title: "Select"
};

export const standard = () => (
  <>
    <Select>
      <option children="Foo bar baz" />
      <option children="Bar" />
    </Select>
  </>
);

export const formField = () => (
  <>
    <FormFieldSelect
      label="Country"
      description="What country do you live in?"
      selectProps={{
        children: (
          <>
            <option children="Canada" />
            <option children="United Kingdom" />
            <option children="United States of America" />
          </>
        )
      }}
      hint="Often times the place you were born"
      validationMessage="This field is required"
    />
  </>
);
