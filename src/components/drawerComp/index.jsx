import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Home, Info, Logout, Phone, ShoppingBag } from "@mui/icons-material";

function DrawerComp({ toggleDrawer, open }) {
  return (
    <Drawer
      open={open}
      variant="persistent"
      anchor="left"
      sx={{
        display: { xs: "block", md: "none" },
      }}
      onClose={toggleDrawer}
    >
      <Box
        sx={{
          width: "left" === "top" || "left" === "bottom" ? "auto" : 250,
          background: "#fff",
        }}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List sx={{ width: { xs: 250, md: 350 } }}>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingBag />
            </ListItemIcon>
            <ListItemText primary="Your Orders" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary="Contuct Us" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Login | Sign Up" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default DrawerComp;
