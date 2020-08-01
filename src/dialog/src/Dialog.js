import React, { useRef, useState, cloneElement, createElement } from "react";
import * as Reach from "@reach/dialog";
import { animated, config, useChain, useTransition } from "react-spring";
import css from "@styled-system/css";
import { rgba } from "polished";

import { IconButton } from "../../buttons";
import { Flex } from "../../flex";
import { Heading } from "../../typography";

// Make Reach UI components animatable with react-spring
const AnimatedDialogOverlay = animated(Reach.DialogOverlay);
const AnimatedDialogContent = animated(Reach.DialogContent);

const overlayStyles = css({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9998,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  p: "layout.1",
  bg: rgba("#000", 0.6),
});

const contentStyles = ({ maxWidth }) =>
  css({
    display: "block",
    width: "100%",
    maxWidth: maxWidth,
    p: 0,
    borderRadius: "corners.3",
    overflow: "hidden",
    bg: "background.2",
    boxShadow: "elevations.4",
    "&:focus": { outline: 0 },
  });

function Dialog({ as, children, dialog, ...rest }) {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const overlayRef = useRef();
  const overlayTransitions = useTransition(showDialog, null, {
    ref: overlayRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  });

  const contentRef = useRef();
  const contentTransitions = useTransition(showDialog, null, {
    ref: contentRef,
    from: { opacity: 0, transform: "translateY(-16px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-32px)" },
    config: config.stiff,
  });

  useChain(showDialog ? [overlayRef, contentRef] : [contentRef, overlayRef], [
    0,
    showDialog ? 0.1 : 0,
  ]);

  return (
    <>
      {createElement(
        as,
        { "data-fresco-id": "dialog.button", onClick: open, ...rest },
        children
      )}
      {overlayTransitions.map(
        ({ item, key, props: styles }) =>
          item && (
            <AnimatedDialogOverlay
              onDismiss={close}
              css={overlayStyles}
              key={key}
              style={styles}
            >
              {contentTransitions.map(
                ({ item, key, props: styles }) =>
                  item && (
                    <AnimatedDialogContent
                      css={contentStyles({
                        maxWidth: dialog.maxWidth ? dialog.maxWidth : 512,
                      })}
                      key={key}
                      style={styles}
                    >
                      {dialog.name && (
                        <Flex
                          alignItems="center"
                          width="100%"
                          py="spacing.4"
                          pr="spacing.4"
                          borderBottomWidth={1}
                          css={{ userSelect: "none" }}
                        >
                          <Heading
                            children={dialog.name}
                            as="span"
                            size={500}
                            flex={1}
                            px="layout.2"
                          />
                          <IconButton
                            symbol="close-line"
                            intent="default"
                            appearance="minimal"
                            height={32}
                            ml="auto"
                            onClick={close}
                          />
                        </Flex>
                      )}
                      {cloneElement(dialog.children, {
                        showDialog: showDialog,
                        open: open,
                        close: close,
                      })}
                    </AnimatedDialogContent>
                  )
              )}
            </AnimatedDialogOverlay>
          )
      )}
    </>
  );
}

export default Dialog;
