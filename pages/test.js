import * as React from "react";
import Alert from "@material-ui/core/Alert";
import Stack from "@material-ui/core/Stack";
import { Button } from "@material-ui/core";

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      <Button color="error" variant="contained">
        سلام
      </Button>
    </Stack>
  );
}
