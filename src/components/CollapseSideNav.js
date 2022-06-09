import React, { handleClick } from "react";
import Button from "@mui/material/Button";
import ArrowLeftIcon from "./Icons/ArrowLeftIcon";

const CollapseSideNav = ({ onClose, close, title }) => {
  handleClick = (e) => {
    onClose(!close);
    console.log("Se hizo click");
    console.log(close);
  };

  return (
    <Button
      startIcon={<ArrowLeftIcon />}
      onClick={handleClick}
      size="large"
      sx={{ textDecoration: "none", textTransform: "inherit" }}
    >
      {title}
    </Button>
  );
};

export default CollapseSideNav;
