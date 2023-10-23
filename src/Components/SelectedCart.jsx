import { Link } from "react-router-dom";


const SelectedCart = ({product}) => {
    const { name, _id, brand, photo, p_type, price, rating, p_description } =
    product || {};
    return (
        <div className="card  glass">
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
    )
}
export default SelectedCart;