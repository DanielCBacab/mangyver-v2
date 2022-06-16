import React from "react";
import Chip from "@mui/material/Chip";
import PriorityIcon from "../components/Icons/PriorityIcon";

const PriorityChip = ({ level }) => {
  return (
    <Chip
      size="small"
      sx={{
        backgroundColor: "transparent",
        color:
          level === "low"
            ? "#87AADF"
            : level === "medium"
            ? "#E8AE57"
            : level === "high"
            ? "#E25C5C"
            : "#BA57E8",
        fontWeight: 700,
      }}
      icon={<PriorityIcon level={level} />}
      label={
        level === "low"
          ? "Prioridad Baja"
          : level === "medium"
          ? "Prioridad media"
          : level === "high"
          ? "Prioridad alta"
          : "Prioridad muy alta"
      }
    />
  );
};

export default PriorityChip;
