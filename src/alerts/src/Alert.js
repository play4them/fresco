import React, { useState, useEffect } from "react";
import { useTheme } from "emotion-theming";
import { default as ReachAlert } from "@reach/alert";
import {
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle,
  mdiClose,
  mdiInformation,
} from "@mdi/js";

import { Box } from "../../box";
import { Button, IconButton } from "../../buttons";
import { Icon } from "../../icon";
import { Heading, Paragraph } from "../../typography";

function Alert({
  closeCallback,
  buttonProps,
  children,
  intent,
  title,
  ...rest
}) {
  const [open, setOpen] = useState(true);

  //when props update, force toast to reoopen, even if closed
  useEffect(() => {
    if (rest) {
      setOpen(true);
    }
  }, [children]);

  const theme = useTheme();

  const intents = {
    default: {
      color: theme.colors.gray[6],
      icon: mdiInformation,
    },
    primary: {
      color: theme.colors.intent.primary[7],
      icon: mdiInformation,
    },
    success: {
      color: theme.colors.intent.success[7],
      icon: mdiCheckCircle,
    },
    warning: {
      color: theme.colors.intent.warning[6],
      icon: mdiAlert,
    },
    danger: {
      color: theme.colors.intent.danger[7],
      icon: mdiAlertCircle,
    },
  };

  return (
    <>
      {open && (
        <Box
          data-fresco-id="alert"
          as={ReachAlert}
          role="alert"
          position="relative"
          display="inline-flex"
          alignItems="flex-start"
          pl="spacing.5"
          pr="spacing.8"
          borderRadius="4px"
          bg="gray.0"
          overflow="hidden"
          boxShadow="elevations.0"
          {...rest}
        >
          <Box
            data-fresco-id="alert.highlight"
            position="absolute"
            top={0}
            left={0}
            width="4px"
            height="100%"
            bg={intents[intent].color}
          />

          {intents[intent].icon && (
            <Box
              data-fresco-id="alert.icon"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={40}
              pr="spacing.3"
            >
              <Icon
                symbol={intents[intent].icon}
                size={20}
                color={intents[intent].color}
              />
            </Box>
          )}

          <Box data-fresco-id="alert.content" flex={1} minHeight={40} py="10px">
            <Box display="flex" alignItems="center" flexWrap="wrap" flex={1}>
              {title && (
                <Heading as="h4" size={400} mr={children && "spacing.2"}>
                  {title}
                </Heading>
              )}
              {children && (
                <Paragraph as="p" size={400} color="gray.7">
                  {children}
                </Paragraph>
              )}
            </Box>
            {buttonProps && (
              <Box mt="8px">
                <Button height={32} theme={theme} {...buttonProps} />
              </Box>
            )}
          </Box>

          <Box
            data-fresco-id="alert.button"
            position="absolute"
            top={0}
            right={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={40}
            height={40}
          >
            <IconButton
              theme={theme}
              icon={mdiClose}
              appearance="minimal"
              intent="default"
              height={32}
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
