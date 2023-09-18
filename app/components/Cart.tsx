import React from "react";

export default function Cart(props: any) {
  return (
    <dialog
      open={props.cart}
      className="lg:mr-[6rem] z-10 max-lg:min-w-[80%] max-lg:min-h-[40%] lg:min-w-[25%] xl:min-w-[20%] rounded-lg mt-3 shadow-2xl"
    >
      <div className="m-4">
        <span className="font-bold">Cart</span>
      </div>
      <hr />
      <div className="flex justify-center items-center content-center min-h-[12rem]">
        <h2 className="font-bold text-gray-400">Your cart is empty.</h2>
      </div>
    </dialog>
  );
}
