import { Link, useLoaderData } from "react-router-dom";
import SelectedCart from "../Components/SelectedCart";

const MyCart = () => {
  const products = useLoaderData();
//   console.log(products)
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 py-14 dark:bg-zinc-800 dark:text-white">
      {
        products.map(product => <SelectedCart key={product._id} product={product}></SelectedCart>)
      }
    </div>
  );
};

export default MyCart;
