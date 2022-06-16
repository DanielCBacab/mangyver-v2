import React from "react";
import { Grid, Typography } from "@mui/material";
import CreateNotificationIcon from "../components/Icons/CreateNotificationIcon";

const CreateNotification = () => {
  return (
    <Grid
      container
      sx={{
        paddingLeft: "1.75rem",
        paddingRight: "1.75rem",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontWeight: "600",
            fontSize: "2rem",
            lineHeight: "1.313rem",
            color: "primary.main",
          }}
        >
          <CreateNotificationIcon /> Creación de Notificaciones
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "white",
          padding: "2rem",
          width: "100%",
          height: "100%",
          borderRadius: "0.5rem",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            {/* <SearchInput /> */}
          </Grid>
          <Grid item xs={12}>
            Table
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CreateNotification;
