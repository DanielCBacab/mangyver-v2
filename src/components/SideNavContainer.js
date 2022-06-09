import React from "react";
import { Grid, Divider } from "@mui/material";
import MangiverLogo from "../assets/logo.png";
import CollapseSideNav from "./CollapseSideNav";
import SideNavItem from "./SideNavItem";
import Profile from "./Profile";
//Icons
import AdviceIcon from "./Icons/AdviceIcon";
import CreateAdviceIcon from "./Icons/CreateAdviceIcon";
import DownloadAdviceIcon from "./Icons/DownloadAdviceIcon";
import NotificationIcon from "./Icons/NotificationIcon";
import CreateNotificationIcon from "./Icons/CreateNotificationIcon";
import DownloadNotificationIcon from "./Icons/DownloadNotificationIcon";
import UserControlIcon from "./Icons/UserControlIcon";

const NavItem = [
  {
    id: 1,
    title: "Avisos",
    link: "/",
    icon: <AdviceIcon />,
  },
  {
    id: 2,
    title: "Creación de avisos",
    link: "/CreateAdvice",
    icon: <CreateAdviceIcon />,
  },
  {
    id: 3,
    title: "Descargar avisos",
    link: "/DownloadAdvice",
    icon: <DownloadAdviceIcon />,
  },
  {
    id: 4,
    title: "Notificaciones",
    link: "/Notification",
    icon: <NotificationIcon />,
  },
  {
    id: 5,
    title: "Creación de notificaciones",
    link: "/CreateNotification",
    icon: <CreateNotificationIcon />,
  },
  {
    id: 6,
    title: "Descargar notificaciones",
    link: "/DownloadNotification",
    icon: <DownloadNotificationIcon />,
  },
];

const SideNavContainer = ({ onClose, close }) => {
  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        height: "100%",
        paddingTop: "1.75rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <Grid item xs={12}>
        <img
          src={MangiverLogo}
          style={{ width: "100%" }}
          loading="lazy"
          alt="Mangiver"
        />
      </Grid>
      <Grid item xs={12}>
        <Profile close={close} />
        <Divider
          variant="middle"
          sx={{
            marginLeft: "0",
            marginRight: "0",
          }}
        />
      </Grid>

      <Grid item xs={12}>
        {NavItem.map((item) => (
          <SideNavItem
            key={item.id}
            title={item.title}
            link={item.link}
            icon={item.icon}
            close={close}
          />
        ))}
        <Divider
          variant="middle"
          sx={{
            marginLeft: "0",
            marginRight: "0",
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <SideNavItem
          title={"Control de usuarios"}
          icon={<UserControlIcon />}
          close={close}
          link={null}
        />
      </Grid>
      <Grid item xs={12} sx={{ justifyContent: "end", display: "flex" }}>
        <CollapseSideNav
          onClose={onClose}
          close={close}
          title={close ? "" : "Ocultar panel"}
        />
      </Grid>
    </Grid>
  );
};

export default SideNavContainer;
