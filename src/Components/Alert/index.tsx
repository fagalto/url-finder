import { errorMessage } from "../../State/error";
import { useRecoilState } from "recoil";

import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";
import Alert from "@mui/material/Alert/Alert";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

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
      setError("");
  };

  const action = (
    <Alert onClose={handleClose} severity="error">
      {error}
    </Alert>
  );

  return (
    <Snackbar
      open={open}
          autoHideDuration={4000}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
      {action}
    </Snackbar>
  );
}
