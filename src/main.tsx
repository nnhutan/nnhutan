import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { CssBaseline } from "@mui/material";
import "./index.scss";
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
      },
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono", monospace',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: '"JetBrains Mono", monospace';
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
        <App />
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>,
);
