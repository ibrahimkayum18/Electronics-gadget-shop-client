import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const SeeMore = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  // console.log(id)
  const AllData = useLoaderData();

  const { name, _id, brand, photo, p_type, price, rating, p_description } =
    product || {};

  useEffect(() => {
    const mainData = AllData.find((data) => data._id === id);
    setProduct(mainData);
  }, []);

  return (
    <div className="py-10 md:py-20">
      <div className="md:flex justify-center item-center gap-6 ">
        <div>
          <img className=" mx-auto" src={photo} alt="" />
        </div>
        <div className="text-left">
          <h2 className="text-4xl font-bold ">{name}</h2>
          <h3 className="text-2xl font-bold text-gray-400">{brand}</h3>
          <p className="text-xl">
            <span className="font-bold">Product Type: </span> {p_type}
          </p>
          <p className="text-xl font-bold">Price: ${price}</p>
          <p className="font-bold">Rating: 5 out of {rating}</p>
          <p>{p_description}</p>
        </div>
      </div>
      <div className="text-center">
        <Link to={`/update/${_id}`}>
        <button className="btn bg-blue-700 text-white">Update</button>
        </Link>
        <button className="btn bg-blue-700 text-white">Add To Cart -</button>
      </div>
    </div>
  );
};
export default SeeMore;
