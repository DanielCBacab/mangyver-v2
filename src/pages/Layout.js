import React from "react";
import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import TopBar from "../components/TopBar";

const Layout = ({ close, onClose }) => {
  return (
    <Container maxWidth="xxl" disableGutters>
      <Grid container spacing={0}>
        <Grid item xs={close ? 1 : 2}>
          <SideNav close={close} onClose={onClose} />
        </Grid>
        <Grid item xs={close ? 11 : 10}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TopBar />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                padding: "2.375rem 1.75rem",
              }}
            >
              <Outlet />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
