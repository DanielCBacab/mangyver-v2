import React from "react";
import Button from "@mui/material/Button";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const HelpButton = () => {
  return (
    <Button
      sx={{
        color: "white",
        fontWeight: "regular",
        fontFamily: "Roboto",
        fontSize: "1rem",
      }}
    >
      <HelpOutlineIcon />
    </Button>
  );
};

export default HelpButton;
