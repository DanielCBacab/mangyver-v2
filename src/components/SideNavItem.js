import React from "react";
import { Button, IconButton, Link } from "@mui/material";

const SideNavItem = ({ title, link, icon, close }) => {
  return (
    <>
      {close ? (
        <Link
          component={IconButton}
          key={title}
          sx={{
            textDecoration: "none",
            borderRadius: "0.625rem ",
            padding: "1.75rem",
            marginBottom: "0.5rem",
            backgroundColor: "#F3F3F3",
            color: "primary.main",
            "&:active": {
              backgroundColor: "primary.main",
              color: "white",
              fill: "white",
              boxShadow: "0px 3px 14px rgba(0, 0, 0, 0.25)",
            },
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
              fill: "white",
              boxShadow: "0px 3px 14px rgba(0, 0, 0, 0.25)",
            },
            marginRight: "auto",
            marginLeft: "auto",
            display: "grid",
          }}
          href={link}
        >
          {icon}
        </Link>
      ) : (
        <Link
          component={Button}
          key={title}
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
        </Link>
      )}
    </>
  );
};
export default SideNavItem;
