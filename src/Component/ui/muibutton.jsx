import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const BasicButton = ({ color, text, handleClick }) => {
  return (
    <div spacing={2} direction="row">
      <Button
        variant="contained"
        style={{ marginTop: "30px", backgroundColor: color }}
        onClick={handleClick}
      >
        {text}
      </Button>
    </div>
  );
};
export default BasicButton;
