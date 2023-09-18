import React from "react";

export default function ProductCard() {
  return (
    <>
      <div className="flex relative">
        <button className=" bg-white absolute top-[50%]  ml-3 rounded-2xl flex justify-center items-center w-8 h-8">
          <img src="/icon-previous.svg" alt="" width={8} />
        </button>
        <img
          className=""
          src="/image-product-1.jpg"
          alt="sneaker-image"
          height={250}
          width={375}
        />
        <button className=" bg-white absolute top-[50%] right-0  mr-3 rounded-2xl flex justify-center items-center w-8 h-8">
          <img src="/icon-next.svg" alt="" width={8} />
        </button>
      </div>
      <div className="p-4 flex flex-col gap-6">
        <span className="text-orange font-bold text-sm">SNEAKER COMPANY</span>
        <h1 className="font-bold text-4xl">Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div>
          <ul className="flex gap-3 relative">
            <li>$125.00</li>
            <li>50%</li>
            <li className="absolute right-0 mr-4">$250.00</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-around">
            <li>
              <button>
                <img src="/icon-minus.svg" alt="minus-img" />
              </button>
            </li>
            <li>
              <input
                className="text-center font-bold"
                type="number"
                defaultValue={0}
              />
            </li>
            <li>
              <button>
                <img src="/icon-plus.svg" alt="plus-img" />
              </button>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center justify-center bg-orange rounded-lg text-white min-h-[3rem]">
          <img src="/icon-cart-white.svg" alt="cart-img" />
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
}
