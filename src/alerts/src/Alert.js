import React, { useState, useEffect } from "react";
import { useTheme } from "emotion-theming";
import { default as ReachAlert } from "@reach/alert";

import { Box } from "../../box";
import { IconButton } from "../../buttons";
import { Icon } from "../../icon";
import { VStack } from "../../stacks";
import { Heading, Text } from "../../typography";

function Alert({ close, caption, intent, title, ...rest }) {
  const [open, setOpen] = useState(true);

  // When props update, force toast to re-open, even if closed
  useEffect(() => {
    if (rest) {
      setOpen(true);
    }
  }, [caption]);

  const THEME = useTheme();

  const intents = {
    default: {
      color: THEME.colors.label[1],
      icon: "information-line",
    },
    primary: {
      color: THEME.colors.tint.indigo,
      icon: "information-line",
    },
    success: {
      color: THEME.colors.tint.green,
      icon: "checkbox-circle-line",
    },
    warning: {
      color: THEME.colors.tint.orange,
      icon: "alert-line",
    },
    danger: {
      color: THEME.colors.tint.red,
      icon: "error-warning-line",
    },
  };

  return (
    <>
      {open && (
        <Box
          data-fresco-id="alerts.alert"
          as={ReachAlert}
          role="alert"
          position="relative"
          display="inline-flex"
          alignItems="flex-start"
          width={192}
          pl="spacing.5"
          pr="spacing.8"
          borderWidth={1}
          borderColor="fill.0"
          borderRadius="corners.1"
          bg="background.2"
          overflow="hidden"
          boxShadow="elevations.0"
          {...rest}
        >
          <Box
            data-fresco-id="alerts.alert.highlight"
            position="absolute"
            top={0}
            left={0}
            width={4}
            height="100%"
            bg={intents[intent].color}
          />

          {intents[intent].icon && (
            <Box
              data-fresco-id="alerts.alert.icon"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={32}
              pr="spacing.3"
            >
              <Icon
                symbol={intents[intent].icon}
                size={18}
                color={intents[intent].color}
              />
            </Box>
          )}

          <Box
            data-fresco-id="alerts.alert.content"
            flex={1}
            minHeight={38}
            py="9px"
          >
            <Box display="flex" alignItems="center" flexWrap="wrap" flex={1}>
              <VStack space="spacing.3">
                {title && (
                  <Heading as="span" size={500} mr={caption && "spacing.2"}>
                    {title}
                  </Heading>
                )}
                {caption && (
                  <Text as="span" size={400} color="label.1">
                    {caption}
                  </Text>
                )}
              </VStack>
            </Box>
          </Box>

          <Box
            data-fresco-id="alerts.alert.button"
            position="absolute"
            top={0}
            right={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={32}
            height={32}
          >
            <IconButton
              theme={THEME}
              symbol="close-fill"
              intent="default"
              appearance="minimal"
              height={24}
              onClick={() => {
                setOpen(false);
              }}
            />
          </Box>
        </Box>
      )}
    </>
  );
}

Alert.defaultProps = {
  intent: "default",
};

export default Alert;
