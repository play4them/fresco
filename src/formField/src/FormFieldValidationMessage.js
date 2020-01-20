import React from "react";
import { mdiAlert, mdiAlertCircle, mdiCheckCircle } from "@mdi/js";

import { Flex } from "../../flex";
import { Icon } from "../../icon";
import { Text } from "../../typography";

const FormFieldValidationMessage = ({ validationMessage, ...rest }) => {
  // We're setting the intents which change icon and color
  const intents = {
    success: {
      icon: mdiCheckCircle,
      iconColor: "green.5",
      textColor: "green.7"
    },
    warning: {
      icon: mdiAlert,
      iconColor: "yellow.5",
      textColor: "yellow.7"
    },
    danger: {
      icon: mdiAlertCircle,
      iconColor: "red.5",
      textColor: "red.7"
    }
  };

  return (
    <Flex
      data-playground-id="formField.validationMessage"
      alignItems="flex-start"
      mt="spacing.2"
    >
      {/* Icon */}
      <Icon
        symbol={intents[validationMessage.intent].icon}
        size={16}
        mr="spacing.2"
        color={intents[validationMessage.intent].iconColor}
      />

      {/* Message */}
      <Text
        as="p"
        size={300}
        flex={1}
        color={intents[validationMessage.intent].textColor}
        {...rest}
      >
        {validationMessage.message}
      </Text>
    </Flex>
  );
};

export default FormFieldValidationMessage;
