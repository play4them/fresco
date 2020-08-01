import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Box } from "../../box";
import { ValidationMessage } from "../../validationMessage";

import Radio from "./Radio";

const RadioGroup = ({ options, stack, validationMessage }) => {
  const uid = uuidv4();

  return (
    <>
      <Box data-fresco-id="radioGroup" overflow="hidden">
        <Box
          data-fresco-id="radioGroup.list"
          role="radiogroup"
          as="ul"
          display="flex"
          flexDirection={stack && "column"}
          flexWrap="wrap"
          p={0}
          css={{
            margin: stack ? "-2px" : "-2px -4px",
            listStyle: "none",
            "> *": {
              padding: stack ? "2px" : "2px 4px",
            },
          }}
        >
          {options.map((option, i) => (
            <Box data-fresco-id="radioGroup.item" as="li" key={i}>
              <Radio name={uid} value={option.value}>
                {option.label}
              </Radio>
            </Box>
          ))}
        </Box>
      </Box>
      <ValidationMessage validationMessage={validationMessage} />
    </>
  );
};

RadioGroup.defaultProps = {
  options: [
    {
      label: "Option 1",
      value: 1,
    },
    {
      label: "Option 2",
      value: 2,
    },
  ],
};

export default RadioGroup;
