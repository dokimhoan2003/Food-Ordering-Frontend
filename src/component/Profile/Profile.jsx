import { useState } from "react";
import ProfileNavigation from "./ProfileNavigation.jsx";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile.jsx";
import Orders from "./Orders.jsx";
import Address from "./Address.jsx";
import Favorites from "./Favorites.jsx";
import Events from "./Events.jsx";

const Profile = () => {
  const [openSideBar, setopenSideBar] = useState(false);
  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation open={openSideBar} />
      </div>
      <div className="lg:w-[80%]">
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/address" element={<Address />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
};
export default Profile;
