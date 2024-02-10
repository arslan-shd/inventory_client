import React from "react";
import { Link } from "react-router-dom";
// import { MdDashboard } from "react-icons/md";
// import { FaPlusCircle } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="lg:col-span-1">
      <div className=" bg-grayBlack flex items-center gap-2 py-4 text-white px-4">
        {/* <FaUserCircle size="24" /> */}
        <span className="text-lg">Arslan Shahid</span>
      </div>
      <div className="p-4 h-full bg-brown/[0.15]">
        <ul className="flex lg:flex-col gap-3 text-white">
          <li className="flex gap-2 items-center bg-accentRed px-4 py-2 rounded-lg">
            {/* <MdDashboard /> */}
            <Link to="/">Dashboard</Link>
          </li>
          <li className="flex gap-2 items-center bg-accentRed px-4 py-2 rounded-lg">
            {/* <FaPlusCircle /> */}
            <Link to="/add-product">Add Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
