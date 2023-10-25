import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import { useEffect, useState } from "react";
import MarSl from "../Components/MarSl";
import Service from "../Components/Service";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const allBrands = useLoaderData();
  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div className="dark:bg-zinc-800 dark:text-white" data-aos="fade-up">
      <Banner></Banner>
      <h2 className="text-4xl font-bold text-center mt-14 ">Click To Purchase The Product</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 px-5 my-10" data-aos="fade-up">
        {brands.map((brand) => (
          <div className="p-5 rounded-lg border hover:shadow-2xl" key={brand.brand}>
            <Link to={`/products/${brand.brand}`}>
              <div className="w-full h-full" >
                <img className="h-28 w-full" src={brand.brand_image} />
               
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Service></Service>
      </div>
      <div>
          <MarSl></MarSl>
      </div>
    </div>
  );
};

export default Home;
