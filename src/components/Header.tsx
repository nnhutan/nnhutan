import { AppBar, Link, useScrollTrigger } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

interface Props {
  handleScroll: (item: string) => void;
}

const navItems = [
  "About",
  "Projects",
  "Resume",
  "Skills",
  "Experiences",
  "More",
];

const Header: React.FC<Props> = (props) => {
  const { handleScroll } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollTo = (item: string) => {
    if (mobileOpen) {
      setTimeout(() => {
        handleScroll(item);
      }, 300);
    } else {
      handleScroll(item);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, cursor: "pointer" }}
        onClick={() => scrollTo("Infor")}
      >
        {"<Dinh Nhu Tan />"}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            onClick={() => scrollTo(item)}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar
        component="nav"
        sx={{
          boxShadow: 0,
          top: 0,
          backgroundColor: trigger ? "rgba(0,0,0,0.3)" : "transparent",
          transition: "all 0.5s ease",
        }}
        position="fixed"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              // display: { xs: "none", sm: "block" },
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={() => scrollTo("Infor")}
          >
            {"<Dinh Nhu Tan />"}
          </Typography>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => scrollTo(item)}
                href={item === "Resume" ? "" : `#${item.toLowerCase()}`}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "300px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
};

export default Header;
