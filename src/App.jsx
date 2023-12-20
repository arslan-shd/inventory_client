import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";

const App = () => {
  const [productList, setProductList] = useState([
    {
      id: Date.now(),
      name: "Philips Trimmer",
      category: "Electronics",
      price: 13,
      quantity: 3,
    },
  ]);

  return (
    <div className="relative lg:grid lg:grid-cols-6 h-screen font-montserrat">
      <Sidebar />
      <div className="bg-grayBlack/[0.1] lg:col-span-5 py-2 sm:px-8 px-4">
        <Routes>
          <Route
            path="/"
            element={
              <Home productList={productList} setProductList={setProductList} />
            }
          />
          <Route
            path="/add-product"
            element={<AddProduct setProductList={setProductList} />}
          />
        </Routes>
      </div>

      {/* modal */}
      {/* {isModalOpen && (
        <div className="absolute flex justify-center items-center inset-0 bg-gray/[0.5]">
          <div className="py-8 px-12 rounded-xl bg-white">
            <div className="flex items-center justify-between">
              <h2 className="md:text-lg font-bold mb-4 py-2 border-b-2 border-accentRed uppercase">
                Update Product
              </h2>
              <button onClick={() => setIsModalOpen(false)}>
                <IoMdCloseCircle size="28" />
              </button>
            </div>
            <form className="mt-4">
              <div className="grid gap-y-6 gap-x-12 md:grid-cols-2">
                <fieldset>
                  <label htmlFor="name">Product Name</label>
                  <br />
                  <input
                    id="name"
                    className="mt-2 w-full bg-accentRed/[0.07] p-2"
                    type="text"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="category">Product Category</label>
                  <br />
                  <input
                    id="category"
                    className="mt-2 w-full bg-accentRed/[0.07] p-2"
                    type="text"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="price">Product Price</label>
                  <br />
                  <input
                    id="price"
                    className="mt-2 w-full bg-accentRed/[0.07] p-2"
                    type="number"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="quantity">Product Quantity</label>
                  <br />
                  <input
                    id="quantity"
                    className="mt-2 w-full bg-accentRed/[0.07] p-2"
                    type="number"
                  />
                </fieldset>
              </div>
              <button className="mt-6 py-2 px-4 rounded-lg bg-accentRed text-white text-lg">
                Save
              </button>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default App;
