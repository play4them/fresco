import React from "react";
import { mdiMagnify } from "@mdi/js";

import { Box } from "../../box";
import { FormFieldCombobox, Combobox } from "..";

export default {
  title: "Combobox"
};

export const standard = () => (
  <>
    <Box p={64}>
      <Combobox
        placeholder="Country"
        iconBefore={mdiMagnify}
        openOnFocus
        width={240}
        items={[
          {
            value: "Australia"
          },
          {
            value: "Canada"
          },
          {
            value: "United Kingdom"
          },
          {
            value: "United States of America"
          }
        ]}
      />
    </Box>
  </>
);

export const formField = () => (
  <>
    <FormFieldCombobox
      label="Country"
      description="What country do you live in?"
      comboboxProps={{
        placeholder: "Country",
        iconBefore: mdiMagnify,
        openOnFocus: true,
        width: 240,
        items: [
          {
            value: "Australia"
          },
          {
            value: "Canada"
          },
          {
            value: "United Kingdom"
          },
          {
            value: "United States of America"
          }
        ]
      }}
      hint="Often times the place you were born"
      validationMessage="This field is required"
    />
  </>
);
