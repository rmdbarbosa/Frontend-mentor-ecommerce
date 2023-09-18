"use client";

import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart";

export default function Cart(props: any) {
  const { cartItems, addToCart, clearCart, getCartTotal }: any =
    useContext(CartContext);

  return (
    <dialog
      open={props.cart}
      className="lg:mr-[6rem] z-10 min-w-[80%] lg:min-w-[25%] rounded-lg mt-3 shadow-2xl"
    >
      <div className="m-4">
        <span className="font-bold">Cart</span>
      </div>
      <hr />
      <div className="flex flex-col justify-between items-center content-center min-h-[12rem] p-6">
        {cartItems.length > 0 ? (
          <>
            <div className="flex min-w-full justify-between items-center gap-6">
              <img
                className="max-w-[3rem] rounded-lg"
                src="/image-product-1-thumbnail.jpg"
                alt="product-image"
              />
              <div className="flex flex-col">
                <div>
                  <span className="text-gray-400">
                    Fall Limited Edition Sneakers
                  </span>
                </div>
                <div>
                  <ul className="flex gap-2 ">
                    <li className="text-gray-400">$125.00</li>
                    <li className="text-gray-400">x</li>
                    <li className="text-gray-400">{cartItems[0].quantity}</li>
                    <li className="font-bold">
                      ${cartItems[0].price * cartItems[0].quantity}
                    </li>
                  </ul>
                </div>
              </div>
              <div onClick={() => clearCart()}>
                <img src="/icon-delete.svg" alt="" />
              </div>
            </div>
            <div className="flex justify-center min-w-[100%]">
              <button className="min-w-[100%] bg-orange rounded-md text-white min-h-[3rem]">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <h2 className="font-bold text-gray-400">Your cart is empty.</h2>
        )}
      </div>
    </dialog>
  );
}
