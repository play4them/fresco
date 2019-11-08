import React from "react";
import uuidv4 from "uuid/v4";

import { Box } from "../../box";

import Radio from "./Radio";

const RadioGroup = ({ options, stack }) => {
  const uid = uuidv4();

  return (
    <Box data-playground-id="radioGroup" overflow="hidden">
      <Box
        data-playground-id="radioGroup.list"
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
            padding: stack ? "2px" : "2px 4px"
          }
        }}
      >
        {options.map((option, i) => (
          <Box data-playground-id="radioGroup.item" as="li" key={i}>
            <Radio name={uid} value={option.value}>
              {option.label}
            </Radio>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

RadioGroup.defaultProps = {
  options: [
    {
      label: "Option 1",
      value: 1
    },
    {
      label: "Option 2",
      value: 2
    }
  ]
};

export default RadioGroup;
