import RestaurantCard from "../Restaurant/RestaurantCard";

const Favorites = () => {
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
      <div className="flex flex-wrap justify-center gap-3">
        {[1, 1, 1].map((item, index) => (
          <RestaurantCard key={index} />
        ))}
      </div>
    </div>
  );
};
export default Favorites;
