import React from "react";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";

const MenuListComp = () => {
  const icons = [
    {
      iconName: <DashboardCustomizeIcon />,
      title: "Dashboard",
      path: "/stock",
    },
  ];
  return (
    <div> <List>
        {icons.map((item, text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.iconName}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListComp;
