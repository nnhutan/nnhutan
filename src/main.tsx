import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./index.scss";

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

const theme = createTheme({
  palette: {
    custom: {
      main: "#f8f9fa",
      light: "#ffffff",
      dark: "#c2c2c2",
      contrastText: "#000000",
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
