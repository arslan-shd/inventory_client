import React from "react";

const ProductRowHead = () => {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-7 mb-4 font-semibold border-y-2 border-accentRed py-1 text-center">
      {/* s/n */}
      <div>S/N</div>
      <div>Name</div>
      <div className="hidden lg:block">Category</div>
      <div>Price</div>
      <div className="hidden lg:block">Quantity</div>
      <div className="hidden lg:block">Value</div>
      <div className="flex gap-2">Actions</div>
    </div>
  );
};

export default ProductRowHead;
