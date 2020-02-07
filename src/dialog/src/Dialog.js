import React from "react";
import * as Reach from "@reach/dialog";
import { useTheme } from "emotion-theming";
import css from "@styled-system/css";
import { rgba } from "polished";

const Dialog = ({ dialogCss, trigger, closeButton, children, ...rest }) => {
  const theme = useTheme();

  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <>
      <div
        onClick={() => {
          open();
        }}
      >
        {trigger}
      </div>

      <Reach.DialogOverlay
        css={css({
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: ["flex-end", "center"],
          width: "100%",
          height: "100%",
          p: "spacing.3",
          bg: rgba(theme.colors.gray[9], 0.5)
        })}
        isOpen={showDialog}
        onDismiss={close}
        {...rest}
      >
        <Reach.DialogContent
          css={css({
            display: "inline-block",
            p: "spacing.6",
            borderRadius: "24px",
            bg: "gray.0",
            boxShadow: "elevations.4",
            ...dialogCss
          })}
        >
          <div
            onClick={() => {
              close();
            }}
          >
            {closeButton}
          </div>
          {children && children}
        </Reach.DialogContent>
      </Reach.DialogOverlay>
    </>
  );
};

Dialog.defaultProps = {
  dialogCss: {}
};

export default Dialog;
