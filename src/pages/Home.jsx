import Stat from "../components/Stat";
// import { HiCurrencyDollar } from "react-icons/hi2";
// import { FaShoppingCart } from "react-icons/fa";
// import { BsCartXFill } from "react-icons/bs";
// import { BiSolidCategory } from "react-icons/bi";
import ProductRowHead from "../components/ProductRowHead";
import ProductRow from "../components/ProductRow";

const Home = ({ productList, setProductList }) => {
  const categoriesMap = {};

  if (productList) {
    productList.forEach(function (product) {
      categoriesMap[product.category] =
        (categoriesMap[product.category] || 0) + 1;
    });
  }

  const stats = [
    {
      title: "Total Products",
      value: productList.length,
      color: "bg-magenta",
      // icon: <FaShoppingCart size="30" />,
      icon: "cart-icon.png",
    },
    {
      title: "Store Value",
      value:
        "₹" +
        productList.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        ),
      color: "bg-brown",
      // icon: <HiCurrencyDollar size="30" />,
      icon: "rupee-icon.png",
    },
    {
      title: "Out of Stock",
      value: productList.filter((product) => product.quantity === 0).length,
      color: "bg-accentRed",
      // icon: <BsCartXFill size="30" />,
      icon: "outofstock-icon.png",
    },
    {
      title: "All Categories",
      value: Object.keys(categoriesMap).length,
      color: "bg-grayBlack",
      // icon: <BiSolidCategory size="30" />,
      icon: "category-icon.png",
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
      </section>
    </>
  );
};

export default Home;
