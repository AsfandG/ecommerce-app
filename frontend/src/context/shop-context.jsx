import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useContext } from "react";
import toast from "react-hot-toast";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("please select product size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, sizeObj) => {
      const itemTotal = Object.values(sizeObj).reduce(
        (sum, qty) => sum + qty,
        0
      );
      return total + itemTotal;
    }, 0);
  };

  // const getCartCount = () => {
  //   let totalCount = 0;
  //   for (const items in cartItems) {
  //     for (const item in cartItems[items]) {
  //       try {
  //         if (cartItems[items][item] > 0) {
  //           totalCount += cartItems[items][item];
  //         }
  //       } catch (error) {}
  //     }
  //   }
  //   return totalCount;
  // };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;

export const useShopContext = () => {
  return useContext(ShopContext);
};
