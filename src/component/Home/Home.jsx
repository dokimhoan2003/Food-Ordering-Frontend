import RestaurantCard from "../Restaurant/RestaurantCard";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";

const restaurantFake = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const Home = () => {
  return (
    <div className="pb-10">
      {/* banner */}
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl text-gray-50 lg:text-6xl font-bold z-10 py-5">
            Kim Food
          </p>
          <p className="z-10 text-gray-50 text-xl lg:text-4xl">
            Fresh flavors, happy bites!🥪🍔🍜
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      {/* Food slick */}
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-green-500 py-3 pb-10">
          Top Meels
        </p>
        <MultiItemCarousel />
      </section>

      {/* restaurant favorites */}
      <section className="px-5 lg:px-20 pt-10">
        <h1 className="text-2xl font-semibold text-green-500 pb-8">
          Order From Our Handpicked Favorites
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {restaurantFake.map((item, index) => (
            <RestaurantCard key={index} />
          ))}
        </div>
      </section>

      {/* footer */}
      <section className="footer bg-green-500 text-gray-50 py-10 mt-10">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-5 lg:mb-0">
              <p className="text-xl mb-3">Develop by : Đỗ Kim Hoàn</p>
              <p className="text-xl">Email: kimhoando2003@gmail.com</p>
            </div>
            <div className="mb-5 lg:mb-0">
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Zalo</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Follow Us</h2>
              <p>.............</p>
            </div>
          </div>
          <div className="text-center text-xl mt-10">
            &copy; 2024 Kim Food. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
