import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const Update = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const AllData = useLoaderData();
  const { name, _id, brand, photo, p_type, price, rating, p_description } =
    product || {};

  useEffect(() => {
    const mainData = AllData.find((data) => data._id === id);
    setProduct(mainData);
  }, []);

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    // console.log(name);
    const brand = form.brand.value;
    const photo = form.photo.value;
    const p_type = form.p_type.options[form.p_type.selectedIndex].value;
    const price = form.price.value;
    const rating = form.rating.value;
    const p_description = form.p_description.value;
    const addProduct = {
      name,
      brand,
      photo,
      p_type,
      price,
      rating,
      p_description,
    };

    fetch(`http://localhost:5000/shopifyProducts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Product Updated Successfully')
      })
  };

  return (
    <div>
      <div className="dark:bg-zinc-800 dark:text-white bg-sky-100 w-full h-full py-12">
        <form onSubmit={handleUpdate} className="space-y-5 w-[90%] lg:w-[70%]  mx-auto p-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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
                className="py-3 px-5 rounded-lg w-full mt-3 dark:bg-zinc-800 dark:text-white"
                placeholder="Product Name..."
                type="text"
                defaultValue={name}
                name="name"
              />
            </div>
            <div className="w-full">
              <label className="text-xl font-semibold pb-3 text-white ">
                {" "}
                Brand{" "}
              </label>
              <br />
              <input
                className="py-3 px-5 rounded-lg w-full mt-3 dark:bg-zinc-800 dark:text-white"
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
                className="py-3 px-5 rounded-lg w-full mt-3 dark:bg-zinc-800 dark:text-white"
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
                className="py-3 px-5 rounded-lg w-full mt-3 dark:bg-zinc-800 dark:text-white"
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
                className="py-3 px-5 rounded-lg w-full mt-3 dark:bg-zinc-800 dark:text-white"
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
                className="py-3 px-5 rounded-lg w-full mt-3 dark:bg-zinc-800 dark:text-white"
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
              className="py-3 px-5 rounded-lg w-full mt-3 dark:bg-zinc-800 dark:text-white"
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
