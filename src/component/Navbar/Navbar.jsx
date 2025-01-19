import { Avatar, Badge, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { green } from "@mui/material/colors";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="px-5 sticky top-0 z-50  py-[.8rem] bg-[#22c55e] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li
          onClick={() => navigate("/")}
          className="logo font-semibold text-gray-50 text-2xl"
        >
          Kim Food
        </li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon className="text-gray-50" sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>

        <div className="">
          <Avatar sx={{ bgcolor: "white", color: green.A400 }}>H</Avatar>
        </div>

        <div className="">
          <IconButton>
            <Badge color="primary" badgeContent={3}>
              <ShoppingBagIcon
                className="text-gray-50"
                sx={{ fontSize: "1.5rem" }}
              />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
