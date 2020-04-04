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
      iconColor: "intent.success.7",
      textColor: "intent.success.9",
    },
    warning: {
      icon: mdiAlert,
      iconColor: "intent.warning.7",
      textColor: "intent.warning.9",
    },
    danger: {
      icon: mdiAlertCircle,
      iconColor: "intent.danger.7",
      textColor: "intent.danger.9",
    },
  };

  return (
    <Flex
      data-fresco-id="formField.validationMessage"
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
