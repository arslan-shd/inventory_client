import Stat from "../components/Stat";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { BsCartXFill } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import ProductRowHead from "../components/ProductRowHead";
import ProductRow from "../components/ProductRow";

const Home = ({ productList, setProductList }) => {
  const categoriesMap = {};

  productList.forEach(function (product) {
    categoriesMap[product.category] =
      (categoriesMap[product.category] || 0) + 1;
  });

  const stats = [
    {
      title: "Total Products",
      value: productList.length,
      color: "bg-magenta",
      icon: <FaShoppingCart size="30" />,
    },
    {
      title: "Store Value",
      value:
        "$" +
        productList.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        ),
      color: "bg-brown",
      icon: <HiCurrencyDollar size="30" />,
    },
    {
      title: "Out of Stock",
      value: productList.filter((product) => product.quantity === 0).length,
      color: "bg-accentRed",
      icon: <BsCartXFill size="30" />,
    },
    {
      title: "All Categories",
      value: Object.keys(categoriesMap).length,
      color: "bg-grayBlack",
      icon: <BiSolidCategory size="30" />,
    },
  ];

  return (
    <>
      <h2 className="mb-4 font-semibold text-gray">
        Welcome, <span className="text-accentRed">Arslan Shahid</span>
      </h2>
      <hr />
      <section className="my-4">
        <h3 className="mb-2 text-xl font-bold">Inventory Stats</h3>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 text-white">
          {stats.map((stat) => (
            <Stat key={stat.title} stat={stat} productList={productList} />
          ))}
        </div>
      </section>
      <section>
        <h3 className="mb-2 text-xl font-bold">Inventory Items</h3>
        <ProductRowHead />
        {productList.map((product, index) => (
          <ProductRow
            key={product.id}
            setProductList={setProductList}
            productList={productList}
            product={product}
            index={index}
          />
        ))}

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
      </section>
    </>
  );
};

export default Home;
