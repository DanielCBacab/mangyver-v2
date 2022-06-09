import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SideNavContainer from "./SideNavContainer";

const SideNav = ({ onClose, close }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: "100%",
          height: "100vh",
        },
      }}
    >
      <Paper elevation={16}>
        <SideNavContainer close={close} onClose={onClose} />
      </Paper>
    </Box>
  );
};
export default SideNav;
