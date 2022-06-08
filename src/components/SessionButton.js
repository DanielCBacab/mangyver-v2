import React from "react";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const SessionButton = () => {
  return (
    <Button
      sx={{
        color: "white",
        fontWeight: "regular",
        fontFamily: "Roboto",
        fontSize: "1rem",
        textTransform: "inherit",
      }}
    >
      Cerrar sesión <ExitToAppIcon />
    </Button>
  );
};

export default SessionButton;
