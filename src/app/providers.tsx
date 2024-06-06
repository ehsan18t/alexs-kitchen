"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
