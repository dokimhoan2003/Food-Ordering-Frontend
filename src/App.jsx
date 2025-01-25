import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { lightTheme } from "./theme/LightTheme";
import Home from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile.jsx";
import { CustomerRoute } from "./routes/CustomerRoute.jsx";
import Auth from "./component/Auth/Auth.jsx";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      {/* <Cart />*/}
      {/* <Profile/> */}
      <CustomerRoute />
    </ThemeProvider>
  );
};

export default App;
