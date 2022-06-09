import React from "react";
import { Button, IconButton } from "@mui/material";

const SideNavItem = ({ title, link, icon, close }) => {
  return (
    <>
      {close ? (
        <IconButton
          sx={{
            textDecoration: "none",
            borderRadius: "0.625rem ",
            padding: "1.75rem",
            marginBottom: "0.5rem",
            backgroundColor: "#F3F3F3",
            color: "primary.main",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
              fill: "white",
              boxShadow: "0px 3px 14px rgba(0, 0, 0, 0.25)",
            },
            "&:active": {
              backgroundColor: "primary.main",
              color: "white",
              fill: "white",
              boxShadow: "0px 3px 14px rgba(0, 0, 0, 0.25)",
            },
            marginRight: "auto",
            marginLeft: "auto",
            display: "grid",
          }}
        >
          {icon}
        </IconButton>
      ) : (
        <Button
          href={link}
          startIcon={icon}
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
            lineHeight: "1.313rem",
            textAlign: "left",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
              fill: "white",
              boxShadow: "0px 3px 14px rgba(0, 0, 0, 0.25)",
            },
            "&:active": {
              backgroundColor: "primary.main",
              color: "white",
              fill: "white",
              boxShadow: "0px 3px 14px rgba(0, 0, 0, 0.25)",
            },
          }}
        >
          {title}
        </Button>
      )}
    </>
  );
};
export default SideNavItem;
