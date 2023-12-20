import ProductForm from "../components/ProductForm";

const AddProduct = ({ setProductList }) => {
  return (
    <>
      <h1 className="mb-4 font-semibold text-gray">
        Welcome, <span className="text-accentRed">Arslan Shahid</span>
      </h1>
      <hr />
      <section className="my-4">
        <h2 className="mb-10 text-2xl font-semibold">Add New Product</h2>
        <ProductForm setProductList={setProductList} />
      </section>
    </>
  );
};

export default AddProduct;
