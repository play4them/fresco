import React, { useState, useCallback, useEffect } from "react";
import Portal from "@reach/portal";

import { Box } from "../../box";

import Alert from "./Alert";

const calculatePosition = side => {
  if (!side || side === "top") {
    return {
      top: "spacing.3",
      left: 0
    };
  }
  if (side === "bottom") {
    return {
      bottom: "spacing.3",
      left: 0
    };
  }
};

function ToastAlert({ side, ...rest }) {
  const [open, setOpen] = useState(true);

  //when props update, force toast to reoopen, even if closed
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
            data-fresco-id="toastAlert"
            position="fixed"
            width="100%"
            px="spacing.3"
            textAlign="center"
            css={{ pointerEvents: "none" }}
            {...calculatePosition(side)}
          >
            <Box
              display="inline-block"
              maxWidth={420}
              textAlign="initial"
              css={{ pointerEvents: "all" }}
            >
              <Alert
                boxShadow="elevations.4"
                {...rest}
                closeCallback={() => {
                  setOpen(false);
                }}
              />
            </Box>
          </Box>
        </Portal>
      )}
    </>
  );
}

ToastAlert.defaultProps = {
  side: "top"
};

export default ToastAlert;
