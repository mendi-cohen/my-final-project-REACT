///ייבואים

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Link } from "react-router-dom";
import EnterCard from "../Lyout_Comp/EnterCard_Comp";
import Admin from "../Connection/Admin_Comp";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

export default function SideBar() {
  /// סטייטים

  const [state, setState] = React.useState({
    right: false,
  });
  const [admin, chackAdmins] = React.useState(false);

  /// פונקציות

  const YESadmin = () => {
    chackAdmins(true);
  };

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
    chackAdmins(false);
  };

  const links = [
    { text: "כל הרשומים", to: "/allUsers" },
    { text: "כל החיבורים", to: "/allLogin" },
    { text: "כתיבת מאמרים", to: "/writeArticel" },
    { text: " שליחת אימייל", to: "/sendEmail" },
    { text: " שאלות הגולשים ", to: "/enswerToUsers" },
    { text: "  שליחת וואצאפ ", to: "/sendWhatsApp" },
    { text: " bbbbbbb", to: "/sendEnswer" },
  ];

  const list = (anchor) => (
  <Box
    sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      {links.map((link, index) => (
        <React.Fragment key={link.text}>
          <ListItem disablePadding>
            <ListItemButton component={Link} to={link.to}>
              {index === 0 && (
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
              )}
              {index === 1 && (
                <ListItemIcon>
                  <AddTaskIcon />
                </ListItemIcon>
              )}
              {index === 2 && (
                <ListItemIcon>
                  <HistoryEduIcon />
                </ListItemIcon>
              )}
              {index === 3 && (
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
              )}
              {index === 4 && (
                <ListItemIcon>
                    <HelpCenterIcon/>
                </ListItemIcon>
              )}
              {index === 5 && (
                <ListItemIcon>
                    <HelpCenterIcon/>
                </ListItemIcon>
              )}
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
          {index < links.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  </Box>
);
  /// רינדור הקומפוננטה

  return (
    <div>
      <Button onClick={YESadmin}> !כניסת מנהל בלבד </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
      {admin ? (
        <div className="admin">
          <EnterCard
            components={<Admin success={toggleDrawer("right", true)} />}
            restartLog={chackAdmins}
          />
        </div>
      ) : null}
    </div>
  );
}
