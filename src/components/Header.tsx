import {
  AppBar,
  MenuItem,
  Select,
  SelectChangeEvent,
  useColorScheme,
  useScrollTrigger,
} from "@mui/material";
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
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectTheme, setTheme } from "../features/themeSlice";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import EN from "../en.png";
import VI from "../vi.png";

interface Props {
  handleScroll: (item: string) => void;
}

const navItems = [
  "about",
  "projects",
  "resume",
  "skills",
  "experiences",
  "more",
];

const Header: React.FC<Props> = (props) => {
  const { t } = useTranslation("core");
  const { setMode } = useColorScheme();
  const theme = useAppSelector(selectTheme);
  const { handleScroll } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  const dispatch = useAppDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
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

  useEffect(() => {
    if (theme !== "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }, [theme]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, cursor: "pointer" }}
        onClick={() => scrollTo("Infor")}
      >
        {`<${t("author")} />`}
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
              <ListItemText primary={t(`header.${item}`)} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: "center" }}>
          <ThemeSwitch
            sx={{ m: 1 }}
            checked={theme === "dark"}
            onChange={handleChangeTheme}
            inputProps={{ "aria-label": "theme switch" }}
          />
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Select
            label="Language"
            onChange={handleChangeLanguage}
            defaultValue={i18n.language}
            sx={{
              padding: 0,
              ["& .MuiSelect-select"]: {
                padding: 0,
              },
            }}
            size="small"
            variant="standard"
          >
            <MenuItem value="en">
              <img
                src={EN}
                width={24}
                height={24}
                alt="EN"
                style={{ margin: "-6px auto -6px" }}
              />
            </MenuItem>
            <MenuItem value="vi">
              <img
                src={VI}
                width={24}
                height={24}
                alt="VI"
                style={{ margin: "-6px auto -6px" }}
              />
            </MenuItem>
          </Select>
        </ListItem>
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
          backgroundColor: trigger
            ? "rgba(0,0,0,0.3)"
            : "transparent !important",
          transition: "all 0.5s ease",
          backgroundImage: "none",
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
            {`<${t("author")} />`}
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
                {t(`header.${item}`)}
              </Button>
            ))}
            <ThemeSwitch
              sx={{ m: 1 }}
              checked={theme === "dark"}
              onChange={handleChangeTheme}
              inputProps={{ "aria-label": "theme switch" }}
            />
            <Select
              label="Language"
              onChange={handleChangeLanguage}
              defaultValue={i18n.language}
              sx={{
                padding: 0,
                ["& .MuiSelect-select"]: {
                  padding: 0,
                },
              }}
              size="small"
              variant="standard"
            >
              <MenuItem value="en">
                <img
                  src={EN}
                  width={24}
                  height={24}
                  alt="EN"
                  style={{ margin: "-6px auto -6px" }}
                />
              </MenuItem>
              <MenuItem value="vi">
                <img
                  src={VI}
                  width={24}
                  height={24}
                  alt="VI"
                  style={{ margin: "-6px auto -6px" }}
                />
              </MenuItem>
            </Select>
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
