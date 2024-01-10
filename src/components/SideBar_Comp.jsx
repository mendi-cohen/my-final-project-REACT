import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const links = [
    { text: 'כל הרשומים', to: '/allUsers' },
    { text: 'כל החיבורים', to: '/allLogin' },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="Send email" disablePadding>
          <ListItemButton component={Link} to="/sendEmail">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="שלח אימייל למשתמש " />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {links.map((link, index) => (
          <ListItem key={link.text} disablePadding>
            <ListItemButton component = {Link} to = {link.to}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}> !כניסת מנהל בלבד  </Button>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  );
}
