import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LanguajeSelect from "./LanguageSelect";
import SessionButton from "./SessionButton";
import HelpButton from "./HelpButton";

const TopBar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          flexGrow: 1,
          backgroundColor: "primary.main",
          // paddingTop: "1.75rem",
          // paddingBottom: "1.75rem",
          // paddingLeft: "2.25rem",
        }}
      >
        <Toolbar>
          <Typography
            component="div"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "Roboto",
              fontSize: "1.313rem",
              flexGrow: 1,
            }}
          >
            Panel de control
          </Typography>
          <LanguajeSelect />
          <SessionButton />
          <HelpButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
