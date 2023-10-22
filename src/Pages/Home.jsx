import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import { useEffect, useState } from "react";

const Home = () => {
    const [brands, setBrands] = useState([])
  const allBrands = useLoaderData();
    console.log(brands)
    useEffect(() => {
        fetch('./brands.json')
        .then(res => res.json())
        .then(data => {
            setBrands(data)
        })
    },[])

  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-3 gap-6 my-14 px-5">
        {brands.map((brand) => (
          <div className="p-5 rounded-lg border" key={brand.brand}>
            <Link to={`/products/${brand.brand}`}>
              <div className="w-full h-full" >
                <img className="h-32 w-full" src={brand.brand_image} />
                <h2 className="text-center text-3xl font-bold">
                  {brand.brand}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
