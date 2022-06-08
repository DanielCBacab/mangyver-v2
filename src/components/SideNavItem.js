import React from "react";
import Button from "@mui/material/Button";

const SideNavItem = ({ title, link, icon }) => {
  return (
    <Button
      href={link}
      sx={{
        textDecoration: "none",
        borderRadius: "0.625rem ",
        width: "100%",
        paddingLeft: "1.75rem",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        marginBottom: "0.5rem",
        fontSize: "1rem",
        textTransform: "inherit",
        backgroundColor: "#F3F3F3",
        color: "primary.main",
        justifyContent: "inherit",
        textAlign: "left",
        "&:hover": {
          backgroundColor: "#2760B7",
          color: "white",
        },
        "&:active": {
          backgroundColor: "#2760B7",
          color: "white",
        },
      }}
    >
      <img src={icon} /> {title}
    </Button>
  );
};
export default SideNavItem;
