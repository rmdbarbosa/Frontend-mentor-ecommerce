"use client";

import React, { useState } from "react";
import Cart from "./Cart";

export default function Navbar() {
  const [dialog, setDialog] = useState(false);
  const [cart, setCart] = useState(false);
  const navbar = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <>
      <div className="relative p-5 flex justify-between items-center border border-neutral-50 md:px-16 lg:px-32">
        <ul className="flex items-center gap-3">
          <li className="flex">
            <button onClick={() => setDialog(true)}>
              <img
                className="md:hidden"
                src="/icon-menu.svg"
                alt="mobile-menu-dropdown"
              />
            </button>
            {/* mobile modal */}
            <dialog
              className="min-h-screen w-[100%] absolute z-10 top-0 left-0  bg-modal-overlay "
              open={dialog}
            >
              <div className=" bg-white min-h-screen w-[60%] absolute z-40 pt-3 pl-4">
                <button
                  className="text-neutral-400 marker:font-bold text-xl"
                  onClick={() => setDialog(false)}
                >
                  x
                </button>
                <ul className="flex flex-col gap-3 mt-6">
                  {navbar.map((item) => (
                    <li
                      className="font-bold text-sm text-neutral-800"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </dialog>
            {/* end of mobile modal */}
          </li>

          <li className="font-bold text-3xl text-neutral-800 mb-1">sneakers</li>
          <ul className="gap-6 text-neutral-400 text-sm ml-12 hidden md:flex">
            {navbar.map((item) => (
              <li key={item} className="cursor-pointer hover:text-orange">
                {item}
              </li>
            ))}
          </ul>
        </ul>
        <ul className="flex gap-6 items-center cursor-pointer">
          <li className="hover:scale-110" onClick={() => setCart(!cart)}>
            <img src="/icon-cart.svg" alt="cart-img" />
          </li>
          <li>
            <img
              className="w-[20px] md:w-[40px]"
              src="/image-avatar.png"
              alt="profile-image"
            />
          </li>
        </ul>
      </div>
      {/** Cart */}
      <Cart cart={cart} />
    </>
  );
}
