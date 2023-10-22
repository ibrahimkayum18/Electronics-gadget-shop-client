import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Update = () => {
    const [product, setProduct] = useState([])
  const { id } = useParams();
  const AllData = useLoaderData();
  console.log(AllData)
  const { name, _id, brand, photo, p_type, price, rating, p_description } =
    product || {};

    useEffect(() => {
        const mainData = AllData.find((data) => data._id === id);
        setProduct(mainData);
      }, []);


  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 w-full h-full py-12">
        <form className="space-y-5 w-[90%] lg:w-[70%]  mx-auto p-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div>
            <h2 className="text-center text-4xl font-bold text-white">
              Update Your Product
            </h2>
          </div>
          <div className="md:flex justify-center gap-5">
            <div className="w-full">
              <label className="text-xl font-semibold pb-3 text-white">
                {" "}
                Product Name{" "}
              </label>
              <br />
              <input
                className="py-3 px-5 rounded-lg w-full mt-3"
                placeholder="Product Name..."
                type="text"
                defaultValue={name}
                name="name"
              />
            </div>
            <div className="w-full">
              <label className="text-xl font-semibold pb-3 text-white">
                {" "}
                Brand{" "}
              </label>
              <br />
              <input
                className="py-3 px-5 rounded-lg w-full mt-3"
                placeholder="Brand Name..."
                type="text"
                defaultValue={brand}
                name="brand"
              />
            </div>
          </div>
          <div className="md:flex justify-center gap-5">
            <div className="w-full">
              <label className="text-xl font-semibold pb-3 text-white">
                {" "}
                Product Image Link{" "}
              </label>
              <br />
              <input
                className="py-3 px-5 rounded-lg w-full mt-3"
                placeholder="Product Image Link..."
                type="text"
                defaultValue={photo}
                name="photo"
              />
            </div>
            <div className="w-full">
              <label className="text-xl font-semibold pb-3 text-white">
                {" "}
                Product Type{" "}
              </label>
              <br />
              <select
                name="p_type"
                className="py-3 px-5 rounded-lg w-full mt-3"
              >
                <option value="Technology and Electronics">
                  Technology and Electronics
                </option>
                <option value="Automotive">Automotive</option>
                <option value="Fashion and Apparel">Fashion and Apparel</option>
                <option value="Food and Beverage">Food and Beverage</option>
              </select>
            </div>
          </div>
          <div className="md:flex justify-center gap-5">
            <div className="w-full">
              <label className="text-xl font-semibold pb-3 text-white">
                {" "}
                Product Price{" "}
              </label>
              <br />
              <input
                className="py-3 px-5 rounded-lg w-full mt-3"
                placeholder="Price..."
                type="text"
                defaultValue={price}
                name="price"
              />
            </div>
            <div className="w-full">
              <label className="text-xl font-semibold pb-3 text-white">
                {" "}
                Rating{" "}
              </label>
              <br />
              <input
                className="py-3 px-5 rounded-lg w-full mt-3"
                placeholder="Rating..."
                type="text"
                defaultValue={rating}
                name="rating"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="text-xl font-semibold pb-3 text-white">
              {" "}
              Product Description{" "}
            </label>
            <br />
            <input
              className="py-3 px-5 rounded-lg w-full mt-3"
              placeholder="Description..."
              type="text"
              defaultValue={p_description}
              name="p_description"
            />
          </div>
          <div>
            <button
              className="py-3 w-full rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Update;
