import React, { useState } from "react";
// import { MdEdit } from "react-icons/md";
// import { FaTrashAlt } from "react-icons/fa";
// import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";

const ProductRow = ({ product, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, category, price, quantity, id } = product;
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedCategory, setUpdatedCategory] = useState(category);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`https://inventory-server-2oby.onrender.com/products/${id}`, {
        updatedName,
        updatedCategory,
        updatedPrice,
        updatedQuantity,
      })
      .then((result) => {
        console.log(result);
        setIsModalOpen(false);
      })
      .catch((err) => console.log(err + "from frontend"));
  };

  const handleDelete = () => {
    axios
      .delete(`https://inventory-server-2oby.onrender.com/products/${id}`)
      .then((result) => console.log(result));
  };

  return (
    <>
      <div className="mb-4 grid grid-cols-4 lg:grid-cols-7 text-center text-gray">
        {/* s/n */}
        <div>{index + 1}</div>
        {/* name */}
        <div className="">{name}</div>
        {/* category */}
        <div className="hidden lg:block">{category}</div>
        {/* Price */}
        <div>${price}</div>
        {/* Quantity */}
        <div className="hidden lg:block">{quantity}</div>
        {/* value */}
        <div className="hidden lg:block">${price * quantity}</div>
        {/* Actions */}
        <div className="flex gap-2">
          <button
            className="text-green-600"
            title="Edit Product"
            onClick={openModal}
          >
            {/* <MdEdit /> */}
            <img className="w-7" src="edit-icon.png" alt="edit-icon" />
          </button>
          <button
            className="text-red-600"
            title="Delete Product"
            onClick={() => {
              handleDelete();
            }}
          >
            {/* <FaTrashAlt /> */}
            <img className="w-7" src="delete-icon.png" alt="delete-icon" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute flex justify-center items-center inset-0 bg-gray/[0.5]">
          <div className="py-8 px-12 rounded-xl bg-white">
            <div className="flex items-center justify-between">
              <h2 className="md:text-lg font-bold mb-4 py-2 border-b-2 border-accentRed uppercase">
                Update Product
              </h2>
              <button onClick={() => setIsModalOpen(false)}>
                {/* <IoMdCloseCircle size="28" /> */}
                <img className="w-6" src="close-icon.png" alt="close-icon" />
              </button>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
              <div className="grid gap-y-6 gap-x-12 md:grid-cols-2">
                <fieldset>
                  <label htmlFor="name">Product Name</label>
                  <br />
                  <input
                    id="name"
                    className="mt-2 w-full bg-accentRed/[0.07] p-2"
                    type="text"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="category">Product Category</label>
                  <br />
                  <input
                    id="category"
                    className="mt-2 w-full bg-accentRed/[0.07] p-2"
                    type="text"
                    value={updatedCategory}
                    onChange={(e) => setUpdatedCategory(e.target.value)}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="price">Product Price</label>
                  <br />
                  <input
                    id="price"
                    className="mt-2 w-full bg-accentRed/[0.07] p-2"
                    type="number"
                    value={updatedPrice}
                    onChange={(e) => setUpdatedPrice(parseInt(e.target.value))}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="quantity">Product Quantity</label>
                  <br />
                  <input
                    id="quantity"
                    className="mt-2 w-full bg-accentRed/[0.07] p-2"
                    type="number"
                    value={updatedQuantity}
                    onChange={(e) =>
                      setUpdatedQuantity(parseInt(e.target.value))
                    }
                  />
                </fieldset>
              </div>
              <button className="mt-6 py-2 px-4 rounded-lg bg-accentRed text-white text-lg">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductRow;
