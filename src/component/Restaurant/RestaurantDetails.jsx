import {
  Divider,
  FormControl,
  Grid2,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useState } from "react";
import MenuCard from "./MenuCard";

const categories = ["thit", "ga", "ca", "trung"];
const foodTypes = [
  { label: "all", value: "all" },
  { label: "Vegetarian only", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];
const menu = [1, 1, 1, 1, 1, 1];
const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className=" py-2 mt-10">Home/res country/name res/id</h3>
        <div>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://media.istockphoto.com/id/1854521028/vi/anh/cafe-b%C3%A1nh-hi%E1%BB%87n-%C4%91%E1%BA%A1i.jpg?s=2048x2048&w=is&k=20&c=BqLnDVNGwlrrAP6XPe7VfRckt6MqOoKoRlbqmTLk5Hc="
                alt=""
              />
            </Grid2>
            <Grid2 size={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://media.istockphoto.com/id/1854521028/vi/anh/cafe-b%C3%A1nh-hi%E1%BB%87n-%C4%91%E1%BA%A1i.jpg?s=2048x2048&w=is&k=20&c=BqLnDVNGwlrrAP6XPe7VfRckt6MqOoKoRlbqmTLk5Hc="
                alt=""
              />
            </Grid2>
            <Grid2 size={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://media.istockphoto.com/id/1854521028/vi/anh/cafe-b%C3%A1nh-hi%E1%BB%87n-%C4%91%E1%BA%A1i.jpg?s=2048x2048&w=is&k=20&c=BqLnDVNGwlrrAP6XPe7VfRckt6MqOoKoRlbqmTLk5Hc="
                alt=""
              />
            </Grid2>
          </Grid2>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Fast Food</h1>
          <p className="mt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            iure est molestias cupiditate eveniet suscipit reprehenderit quos,
            itaque id temporibus magni neque vitae maiores esse dicta rerum
            incidunt explicabo voluptate.
          </p>
          <div className="space-y-3 mt-3">
            <p className="flex items-center gap-3">
              <LocationOnIcon />
              <span>Trung Kính, Hà Nội</span>
            </p>
            <p className=" flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Mon-Sun: 9:00 AM - 9:00 PM (Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Categories
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {categories.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item, index) => (
            <MenuCard key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
