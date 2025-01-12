import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

export default function LongTextSnackbar() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 600 }}>
      <SnackbarContent message="FirstName" action={action} />
      <SnackbarContent message={"LastName"} />
      <SnackbarContent message="Email" action={action} />
      <SnackbarContent message="FeedBack" action={action} />
    </Stack>
    
  );
}
