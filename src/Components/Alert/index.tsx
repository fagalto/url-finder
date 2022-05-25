import { errorMessage } from "../../State/error";
import { useRecoilState } from "recoil";

import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert/Alert";

export default function AlertComponent() {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useRecoilState(errorMessage);

  React.useEffect(() => {
    error.length > 0 && setOpen(true);
  },[error]);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Alert onClose={handleClose} severity="error">
      {error}
    </Alert>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
      {action}
    </Snackbar>
  );
}
