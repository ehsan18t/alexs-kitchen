"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import store from "@/store";
import { Provider } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9DAD7F",
    },
    secondary: {
      main: "#C7CFB7",
    },
    background: {
      default: "#f4f4f4",
    },
    text: {
      primary: "#333",
    },
  },
});

export default function Providers({ children }: any) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}
