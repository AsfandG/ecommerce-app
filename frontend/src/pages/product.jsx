import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShopContext } from "../context/shop-context";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/related-products";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useShopContext();
  const [productData, setProductData] = useState(false);
  const [Image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProduct = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-10 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.5%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-4/5">
            <img src={Image} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 text-sm">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  className={`border py-1 px-3 bg-gray-100 cursor-pointer  ${
                    item === size
                      ? "border-amber-500 text-amber-500"
                      : "border-gray-300"
                  }`}
                  key={index}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-black text-white px-6 py-2 text-sm active:bg-gray-700 cursor-pointer rounded-2xl">
            Add to Cart
          </button>

          <hr className="mt-8 sm:w-4/5 border-gray-300" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex ">
          <b className="border px-5 py-3 text-sm border-gray-300">
            Description
          </b>
          <p className="border px-5 py-3 text-sm border-gray-300">
            Reviews (122)
          </p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 border-gray-300">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum
            totam impedit, iste nihil at hic sint obcaecati magni animi labore
            voluptas sit qui laborum officiis est repudiandae harum
            eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempora veritatis accusantium debitis iste assumenda placeat
            mollitia ad reprehenderit sint quasi Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Voluptatum, illo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            quos? Obcaecati quam distinctio porro nobis nemo voluptates
            cupiditate! Voluptatem, tempora?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Velit, fugiat at! Minima, minus
            pariatur!
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
