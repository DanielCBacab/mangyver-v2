import react from "react";
import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import TopBar from "../components/TopBar";

const Layout = () => {
  return (
    <Container maxWidth="xxl">
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SideNav />
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TopBar />
            </Grid>
            <Grid item xs={12} sx={{ padding: "2.375rem 1.75rem" }}>
              <Outlet />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
