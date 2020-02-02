import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';

function PopupMessage(props) {
  const [open, setOpen] = useState(false);

  const {
    message,
    onClose,
    severity,
  } = props;


  useEffect(() => {
    if (message) setOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
    onClose();
  }

  return (
    <>
      {message &&
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={open}
          onClose={handleClose}
          autoHideDuration={6000}
          message={message}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          <Alert
            elevation={6}
            variant="filled"
            severity={severity}
            onClose={handleClose}>
            {message}
          </Alert>
        </Snackbar>
      }
    </>
  );
}

export default PopupMessage;