import React from "react";
import { Button, Grid } from "@mui/material";
import MangiverLogo from "../assets/logo.png";
import SideNavItem from "./SideNavItem";
//Icons
import Advice from "../assets/advice.svg";
import CreateAdvice from "../assets/createAdvice.svg";
import DownloadAdvice from "../assets/downloadAdvice.svg";

const NavItem = [
  {
    id: 1,
    title: "Avisos",
    icon: { Advice },
    link: "/",
  },
  {
    id: 2,
    title: "Creación de avisos",
    icon: { CreateAdvice },
    link: "/CreateAdvice",
  },
  {
    id: 3,
    title: "Descargar avisos",
    icon: { DownloadAdvice },
    link: "/DownloadAdvice",
    icon: { DownloadAdvice },
  },
  { id: 4, title: "Notificaciones", link: "/Notification", icon: { Advice } },
  {
    id: 5,
    title: "Creación de notificaciones",
    link: "/CreateNotification",
    icon: { CreateAdvice },
  },
  {
    id: 6,
    title: "Descargar notificaciones",
    link: "/DownloadNotification",
    icon: { DownloadAdvice },
  },
];

const SideNavContainer = () => {
  return (
    <Grid
      container
      sx={{
        paddingTop: "1.75rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <Grid item xs={12}>
        <img src={MangiverLogo} sx={{ width: "100% !important" }} />
      </Grid>
      <Grid item xs={12}>
        Perfil
      </Grid>
      <Grid item xs={12} sx={{ paddingTop: "1.5rem" }}>
        {NavItem.map((item) => (
          <SideNavItem
            key={item.id}
            title={item.title}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        <SideNavItem title={"Control de usuarios"} />
      </Grid>
      <Grid item xs={12}>
        Ocultar panel
      </Grid>
    </Grid>
  );
};

export default SideNavContainer;
