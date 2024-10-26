import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { lightTheme } from "./theme/LightTheme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
