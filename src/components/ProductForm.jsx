import React, { useState } from "react";
import axios from "axios";

const ProductForm = ({ setProductList }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/product", {
        name,
        category,
        price,
        quantity,
      })
      .then((result) => console.log(result));
  };

  return (
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
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="category">Product Category</label>
          <br />
          <input
            id="category"
            className="mt-2 w-full bg-accentRed/[0.07] p-2"
            type="text"
            placeholder="E.g. Electronics"
            onChange={(e) => setCategory(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="price">Product Price</label>
          <br />
          <input
            id="price"
            className="mt-2 w-full bg-accentRed/[0.07] p-2"
            type="number"
            placeholder="$12"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="quantity">Product Quantity</label>
          <br />
          <input
            id="quantity"
            className="mt-2 w-full bg-accentRed/[0.07] p-2"
            type="number"
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
  );
};

export default ProductForm;
