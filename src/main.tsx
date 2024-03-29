import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { CssBaseline, LinearProgress } from "@mui/material";
import "@fontsource-variable/jetbrains-mono";
import "./index.scss";
import "./i18n";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

// Augment the palette to include an ochre color
declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an custom option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        custom: {
          main: "#f8f9fa",
          light: "#ffffff",
          dark: "#c2c2c2",
          contrastText: "#000000",
        },
      },
    },
    dark: {
      palette: {
        custom: {
          main: "#f8f9fa",
          light: "#484848",
          dark: "#000000",
          contrastText: "#ffffff",
        },
        background: {
          paper: "#0f101b",
        },
      },
    },
  },
  typography: {
    fontFamily: "'JetBrains Mono Variable', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "'JetBrains Mono Variable', sans-serif";
        }
      `,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<LinearProgress color="secondary" />}>
          <App />
        </Suspense>
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>,
);
