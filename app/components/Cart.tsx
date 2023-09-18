import React from "react";

export default function Cart(props: any) {
  return (
    <dialog
      open={props.cart}
      className="lg:mr-[6rem] z-10 max-lg:max-w-[375px]  lg:min-w-[25%] xl:min-w-[20%] rounded-lg mt-3 shadow-2xl"
    >
      <div className="m-4">
        <span className="font-bold">Cart</span>
      </div>
      <hr />
      <div className="flex flex-col justify-between items-center content-center min-h-[12rem] p-6">
        {/* <h2 className="font-bold text-gray-400">Your cart is empty.</h2> */}
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
                <li className="text-gray-400">3</li>
                <li className="font-bold">$375.00</li>
              </ul>
            </div>
          </div>
          <div>
            <img src="/icon-delete.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-center min-w-[100%]">
          <button className="min-w-[100%] bg-orange rounded-md text-white min-h-[3rem]">
            Checkout
          </button>
        </div>
      </div>
    </dialog>
  );
}
