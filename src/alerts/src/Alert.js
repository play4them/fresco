import React from 'react';
import { useTheme } from 'emotion-theming';
import { default as ReachAlert } from '@reach/alert';
import {
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle,
  mdiClose,
  mdiInformation,
} from '@mdi/js';

import { Box } from '../../box';
import { Button, IconButton } from '../../buttons';
import { Icon } from '../../icon';
import { Heading, Paragraph } from '../../typography';

const Alert = ({ button, children, intent, title, ...rest }) => {
  const theme = useTheme();

  const intents = {
    default: {
      color: theme.colors.gray[5],
      icon: mdiInformation,
    },
    primary: {
      color: theme.colors.blue[6],
      icon: mdiInformation,
    },
    success: {
      color: theme.colors.teal[6],
      icon: mdiCheckCircle,
    },
    warning: {
      color: theme.colors.yellow[5],
      icon: mdiAlert,
    },
    danger: {
      color: theme.colors.red[5],
      icon: mdiAlertCircle,
    },
  };

  return (
    <Box
      data-playground-id="alert"
      as={ReachAlert}
      role="alert"
      position="relative"
      display="inline-flex"
      alignItems="flex-start"
      pl="spacing.5"
      pr="spacing.8"
      borderRadius="4px"
      bg="white"
      overflow="hidden"
      boxShadow="elevations.1"
      {...rest}
    >
      <Box
        data-playground-id="alert.highlight"
        position="absolute"
        top={0}
        left={0}
        width="4px"
        height="100%"
        bg={intents[intent].color}
      />

      {intents[intent].icon && (
        <Box
          data-playground-id="alert.icon"
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

      <Box data-playground-id="alert.content" flex={1} minHeight={40} py="10px">
        <Box display="flex" alignItems="center" flexWrap="wrap" flex={1}>
          {title && (
            <Heading as="h4" size={400} mr={children && 'spacing.2'}>
              {title}
            </Heading>
          )}
          {children && (
            <Paragraph as="p" size={400} color="gray.8">
              {children}
            </Paragraph>
          )}
        </Box>
        {button && (
          <Box mt="8px">
            <Button height={32} {...button} />
          </Box>
        )}
      </Box>

      <Box
        data-playground-id="alert.button"
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
          icon={mdiClose}
          appearance="minimal"
          intent="default"
          height={32}
        />
      </Box>
    </Box>
  );
};

Alert.defaultProps = {
  intent: 'default',
};

export default Alert;
