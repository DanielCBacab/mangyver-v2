import "./App.css";
import RoutesSite from "./routes/RoutesSite";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#2760B7",
      dark: "#18458A",
      contrastText: "#fff",
    },
    secondary: {
      light: "#7E9DCC",
      main: "#6480AB",
      dark: "#475B7A",
      contrastText: "#747474",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesSite />
    </ThemeProvider>
  );
}

export default App;
