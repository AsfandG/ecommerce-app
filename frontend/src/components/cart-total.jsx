import React from "react";
import { useShopContext } from "../context/shop-context";
import Title from "./title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useShopContext();

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text="CART" subText={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>SubTotal:</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>

        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <p>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
