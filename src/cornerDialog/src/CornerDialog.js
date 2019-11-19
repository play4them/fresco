import React from "react";
import Portal from "@reach/portal";

import { Box } from "../../box";
import { Button, IconButton } from "../../buttons";
import { Heading, Paragraph } from "../../typography";
import { mdiClose } from "@mdi/js";

const CornerDialog = ({ button, children, title, ...rest }) => (
  <Portal>
    <Box
      data-fresco-id="cornerDialog"
      position="fixed"
      right={["layout.1", "layout.3"]}
      bottom={["layout.1", "layout.3"]}
      left={["layout.1", "layout.3"]}
      textAlign="right"
      css={{ pointerEvents: "none" }}
      {...rest}
    >
      <Box
        data-fresco-id="cornerDialog.inner"
        display="inline-block"
        width="100%"
        maxWidth={360}
        p={["layout.3", "layout.4"]}
        borderRadius="5px"
        textAlign="initial"
        bg="white"
        boxShadow="elevations.4"
        css={{ pointerEvents: "all" }}
      >
        <Box display="flex" alignItems="flex-start">
          <Heading size={600} flex={1} mt="spacing.2" mr="layout.1">
            {title}
          </Heading>
          <IconButton icon={mdiClose} appearance="minimal" height={32} />
        </Box>
        <Paragraph size={400} mt="layout.1" color="gray.8">
          {children}
        </Paragraph>
        <Box display="flex" justifyContent="flex-end" mt="layout.3">
          <Button
            children="Close"
            intent="default"
            appearance="default"
            height={32}
            mr="layout.1"
          />
          <Button height={32} {...button} />
        </Box>
      </Box>
    </Box>
  </Portal>
);

export default CornerDialog;
