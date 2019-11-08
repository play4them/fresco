import React from 'react';
import * as Reach from '@reach/dialog';
import { useTheme } from 'emotion-theming';
import css from '@styled-system/css';
import { rgba } from 'polished';

const Dialog = ({ ...rest }) => {
  const theme = useTheme();

  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <>
      <button onClick={open}>Show Dialog</button>

      <Reach.DialogOverlay
        css={css({
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: ['flex-end', 'center'],
          width: '100%',
          height: '100%',
          p: 'spacing.3',
          bg: rgba(theme.colors.black, 0.5),
        })}
        isOpen={showDialog}
        onDismiss={close}
        {...rest}
      >
        <Reach.DialogContent
          css={css({
            display: 'inline-block',
            p: 'spacing.6',
            borderRadius: '24px',
            bg: 'white',
            boxShadow: 'elevations.4',
          })}
        >
          <p>
            The overlay styles are a white fade instead of the default black
            fade.
          </p>
          <button onClick={close}>Very nice.</button>
        </Reach.DialogContent>
      </Reach.DialogOverlay>
    </>
  );
};

export default Dialog;
