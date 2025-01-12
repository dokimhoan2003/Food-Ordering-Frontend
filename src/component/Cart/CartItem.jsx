import { Chip, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CartItem = () => {
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://media.istockphoto.com/id/2167400745/photo/authentic-vietnamese-b%C3%BAn-m%E1%BA%AFm-from-mekong-delta-high-quality-culinary-image.jpg?s=2048x2048&w=is&k=20&c=2arFg9UxlKKCz9s1sy5dFAcs4P6RJmRWu6OmIu19vA4="
            alt=""
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>Bún đậu mắm tôm</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton>
                  <RemoveIcon></RemoveIcon>
                </IconButton>
                <div className="w-5 h-5 text-xs flex items-center justify-center">
                  {3}
                </div>
                <IconButton>
                  <AddIcon></AddIcon>
                </IconButton>
              </div>
            </div>
          </div>
          <p>32$</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {[1, 1, 1].map((item, index) => (
          <Chip key={index} label={"thit"} />
        ))}
      </div>
    </div>
  );
};

export default CartItem;
