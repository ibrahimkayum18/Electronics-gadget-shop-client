import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import { useEffect, useState } from "react";

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
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 px-5 my-10">
        {brands.map((brand) => (
          <div className="p-5 rounded-lg border" key={brand.brand}>
            <Link to={`/products/${brand.brand}`}>
              <div className="w-full h-full" >
                <img className="h-28 w-full" src={brand.brand_image} />
               
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>

      </div>
    </div>
  );
};

export default Home;
