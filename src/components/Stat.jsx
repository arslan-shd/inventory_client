import React from "react";

const Stat = ({ stat }) => {
  const { title, value, color, icon } = stat;

  return (
    <div
      className={`${color} p-4 rounded-lg lg:flex gap-3 items-center justify-around shadow-sm shadow-slate-200`}
    >
      {icon}
      <div className="flex-1 mt-2 lg:mt-0">
        <p>{title}</p>
        <p className="font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Stat;
