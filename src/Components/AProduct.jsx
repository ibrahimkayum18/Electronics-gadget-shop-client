import { Link } from "react-router-dom";

const AProduct = ({ aProduct }) => {
  const { name, _id, brand, photo, p_type, price, rating, p_description } =
    aProduct || {};

  return (
    // <div className="border-2 border-blue-600 rounded-lg">
    //   <img className="w-60 h-60 mx-auto" src={photo} alt="" />
    //   <div className="p-5">
    //     <h2 className="text-3xl font-bold">{name}</h2>
    //     <p className="text-xl font-bold text-gray-400">{brand}</p>
    //     <p className="text-xl font-bold">Price: ${price}</p>
    //     <p className="font-bold">Rating: 5 out of {rating}</p>
    //     <div className="text-center">
    //       <Link to={`/seemore/${_id}`}>
    //         <button className="py-3 w-full rounded-lg bg-blue-400 text-white text-xl font-bold">
    //           See More...
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="card glass">
      <figure>
        <img src={photo} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-title">{brand}</p>
        <div className="card-actions justify-end">
        <Link to={`/update/${_id}`}>
            <button className="btn bg-blue-700 text-white">Update</button>
          </Link>
          <Link to={`/seemore/${_id}`}>
            <button className="btn btn-primary">
               See More...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AProduct;
