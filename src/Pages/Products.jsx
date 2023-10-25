import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AProduct from "../Components/AProduct";
import Banner2 from "../Components/Banner2";

const Products = () => {
  const [brandProduct, setBrandProduct] = useState([]);
  const { brand } = useParams();
  const newBrand = brand.toLowerCase();
  const shopifyProducts = useLoaderData();

  useEffect(() => {
    const apple = shopifyProducts.filter(
      (eachProduct) => eachProduct.brand.toLowerCase() === newBrand
    );
    if (apple) {
      setBrandProduct(apple);
    }
  }, []);

  return (
    <div  data-aos="fade-up" className="dark:bg-zinc-800 dark:text-white">
        <Banner2></Banner2>
      <div>
        {
          brandProduct.length > 0 ? <div className="grid md:grid-cols-3 gap-5 py-20 md:px-20">
          {brandProduct.map((aProduct) => (
              <AProduct key={aProduct._id} aProduct={aProduct}></AProduct>
            ))}
          </div> 
          :
          <div className="flex justify-center items-center h-[200px]">
            <h2 className="text-xl font-bold text-gray-600">No Product Available</h2>
          </div>
        }
      </div>
    </div>
  );
};
export default Products;
