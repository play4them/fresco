import React, { useState, useEffect } from "react";
import Portal from "@reach/portal";

import { Box } from "../../box";

import Alert from "./Alert";

const calculatePosition = (position) => {
  if (!position || position === "top") {
    return {
      top: "spacing.3",
      left: 0,
    };
  }
  if (position === "bottom") {
    return {
      bottom: "spacing.3",
      left: 0,
    };
  }
};

function ToastAlert({ position, ...rest }) {
  const [open, setOpen] = useState(true);

  // When props update, force toast to re-open, even if closed
  useEffect(() => {
    if (rest) {
      setOpen(true);
    }
  }, [rest]);

  return (
    <>
      {open && (
        <Portal>
          <Box
            data-fresco-id="alerts.toastAlert"
            position="fixed"
            width="100%"
            px="spacing.3"
            textAlign="center"
            css={{ pointerEvents: "none" }}
            {...calculatePosition(position)}
          >
            <Box
              display="inline-block"
              maxWidth={420}
              textAlign="initial"
              css={{ pointerEvents: "all" }}
            >
              <Alert
                boxShadow="elevations.4"
                close={() => {
                  setOpen(false);
                }}
                {...rest}
              />
            </Box>
          </Box>
        </Portal>
      )}
    </>
  );
}

export default ToastAlert;
