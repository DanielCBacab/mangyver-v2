import React from "react";
import { Grid, Typography } from "@mui/material";

const Profile = ({ close }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            borderRadius: "50%",
            width: "99px",
            height: "99px",
            backgroundColor: "#C4C4C4",
          }}
        ></Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "primary.main",
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "1.313rem",
          }}
        >
          Juan Oropeza
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "1rem",
            textAlign: "center",
            color: "#717171",
          }}
        >
          Nombre de la planta
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
