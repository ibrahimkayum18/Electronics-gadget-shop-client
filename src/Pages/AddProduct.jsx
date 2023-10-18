const AddProduct = () => {
  const handleAddProduct = (e) => {
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
    console.log(addProduct);

    fetch('http://localhost:5000/shopifyProducts', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(addProduct)
    })
    .then(result => result.json())
    .then(data => {
        console.log('check data', data);
    })

  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 w-full h-full py-12">
      <form
        onSubmit={handleAddProduct}
        className="space-y-5 w-[90%] lg:w-[70%]  mx-auto p-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <div>
          <h2 className="text-center text-4xl font-bold text-white">
            Add Your Product
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
              name="photo"
            />
          </div>
          <div className="w-full">
            <label className="text-xl font-semibold pb-3 text-white">
              {" "}
              Product Type{" "}
            </label>
            <br />
            <select name="p_type" className="py-3 px-5 rounded-lg w-full mt-3">
              <option value="Technology and Electronics">Technology and Electronics</option>
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
  );
};

export default AddProduct;
