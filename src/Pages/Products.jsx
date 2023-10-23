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
    <div>
        <Banner2></Banner2>
      <div className="grid md:grid-cols-3 gap-5 my-20 md:px-20">
      {brandProduct.map((aProduct) => (
          <AProduct key={aProduct._id} aProduct={aProduct}></AProduct>
        ))}
      </div>
    </div>
  );
};
export default Products;
