import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { lightTheme } from "./theme/LightTheme";
import Home from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      <RestaurantDetails />
    </ThemeProvider>
  );
};

export default App;
