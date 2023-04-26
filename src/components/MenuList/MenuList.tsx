import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const MenuList = () => {
  const drawerState = true;
  return (
    <>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: drawerState ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: drawerState ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ opacity: drawerState ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: drawerState ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: drawerState ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ opacity: drawerState ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default MenuList;
