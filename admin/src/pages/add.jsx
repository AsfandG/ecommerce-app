import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <form className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1" className="cursor-pointer">
            <img className="w-20" src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image1" hidden />
          <label htmlFor="image2" className="cursor-pointer">
            <img className="w-20" src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image2" hidden />
          <label htmlFor="image3" className="cursor-pointer">
            <img className="w-20" src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image3" hidden />
          <label htmlFor="image4" className="cursor-pointer">
            <img className="w-20" src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image4" hidden />
        </div>
      </div>

      <div className="w-full text-sm">
        <p className="mb-2">Product Name</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <div className="w-full text-sm">
        <p className="mb-2">Product Description</p>
        <textarea
          type="text"
          placeholder="Write content here"
          required
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select className="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Sub Category</p>
          <select className="w-full px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p>Product Price</p>
          <input type="Number" placeholder="25" />
        </div>
      </div>
    </form>
  );
};

export default Add;
