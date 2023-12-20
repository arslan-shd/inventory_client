import React from "react";

const UpdateProduct = () => {
  return (
    <div>
      <form className="md:w-1/2 ">
        <div className="grid gap-y-6 gap-x-12 md:grid-cols-2">
          <fieldset>
            <label htmlFor="name">Product Name</label>
            <br />
            <input
              id="name"
              className="mt-2 w-full bg-accentRed/[0.07] p-2"
              type="text"
              placeholder="E.g. Philips Trimmer"
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="name">Product Category</label>
            <br />
            <input
              id="name"
              className="mt-2 w-full bg-accentRed/[0.07] p-2"
              type="text"
              placeholder="E.g. Electronics"
              onChange={(e) => setCategory(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="name">Product Price</label>
            <br />
            <input
              id="name"
              className="mt-2 w-full bg-accentRed/[0.07] p-2"
              type="text"
              placeholder="$12"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="name">Product Quantity</label>
            <br />
            <input
              id="name"
              className="mt-2 w-full bg-accentRed/[0.07] p-2"
              type="text"
              placeholder="30"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </fieldset>
        </div>
        <button
          onClick={(e) => handleAddProduct(e)}
          className="mt-6 py-2 px-4 rounded-lg bg-accentRed text-white text-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
