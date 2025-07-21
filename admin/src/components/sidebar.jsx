import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import BoxIcon from "../assets/box.png";
import Bill from "../assets/bill.png";
import DashboardIcon from "../assets/dashboard.png";

const SideBar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r border-gray-300">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-lg">
        <NavLink to="/" className="flex gap-2 items-center  px-3 py-2 rounded">
          <img src={DashboardIcon} className="size-4" alt="" />
          <p className="hidden md:block text-sm">Dashboard</p>
        </NavLink>
        <NavLink
          to="/add"
          className="flex gap-2 items-center  px-3 py-2 rounded"
        >
          <img src={assets.add_icon} className="size-4" alt="" />
          <p className="hidden md:block text-sm">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex gap-2 items-center  px-3 py-2 rounded"
        >
          <img src={BoxIcon} className="size-4" alt="" />
          <p className="hidden md:block text-sm">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex gap-2 items-center  px-3 py-2 rounded"
        >
          <img src={Bill} className="size-4" alt="" />
          <p className="hidden md:block text-sm">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
