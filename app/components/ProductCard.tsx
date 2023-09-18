"use client";

import React from "react";
import { useState } from "react";

export default function ProductCard() {
  const [productImg, setProductImg] = useState("/image-product-1.jpg");
  const [selected, setSelected] = useState(1);
  const [qty, setQty] = useState(1);

  const thumbnailImages = [
    "image-product-1-thumbnail.jpg",
    "image-product-2-thumbnail.jpg",
    "image-product-3-thumbnail.jpg",
    "image-product-4-thumbnail.jpg",
  ];

  const handleImgChange = (e) => {
    switch (e.currentTarget.attributes[1].nodeValue) {
      case "image-product-1-thumbnail.jpg":
        setProductImg("/image-product-1.jpg");
        break;
      case "image-product-2-thumbnail.jpg":
        setProductImg("/image-product-2.jpg");
        break;
      case "image-product-3-thumbnail.jpg":
        setProductImg("/image-product-3.jpg");
        break;
      case "image-product-4-thumbnail.jpg":
        setProductImg("/image-product-4.jpg");
        break;
      default:
        console.log("default");
    }
  };

  return (
    <div className="lg:flex lg:items-center lg:p-16 lg:justify-center lg:gap-16">
      {/* SM + MD Sizes */}
      <div className="relative lg:hidden">
        <button className=" bg-white absolute top-[50%]  ml-3 rounded-2xl flex justify-center items-center w-8 h-8">
          <img
            src="/icon-previous.svg"
            alt="previous-icon"
            width={8}
            onClick={() => (selected === 1 ? null : setSelected(selected - 1))}
          />
        </button>
        <img src={`/image-product-${selected}.jpg`} alt="product-img" />
        <button className=" bg-white absolute top-[50%] right-0  mr-3 rounded-2xl flex justify-center items-center w-8 h-8">
          <img
            src="/icon-next.svg"
            alt="next-icon"
            width={8}
            onClick={() => (selected === 4 ? null : setSelected(selected + 1))}
          />
        </button>
      </div>
      {/* LG+ Sizes */}
      <div className="hidden lg:flex lg:flex-col lg:max-w-[35%] lg:gap-6">
        <div>
          <img className="rounded-xl" src={productImg} alt="product-img" />
        </div>
        <div>
          <ul className="flex justify-between w-[100%]">
            {thumbnailImages.map((img, index) => (
              <li key={index} className="relative">
                {productImg.includes(index + 1) && (
                  <div className="border border-orange rounded-xl absolute z-10 w-[100%] h-[100%] bg-white-with-opacity"></div>
                )}
                <img
                  className="rounded-xl max-w-[4rem]"
                  src={img}
                  onClick={(e) => handleImgChange(e)}
                  alt="product-img-thumbnail"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-6 lg:max-w-[30rem]">
        <span className="text-orange font-bold text-sm">SNEAKER COMPANY</span>
        <h1 className="font-bold text-4xl">Fall Limited Edition Sneakers</h1>
        <p className="text-sm text-gray-500 lg:max-w-[25rem]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div>
          <ul className="flex gap-3 relative lg:flex-wrap lg:max-w-[9rem]">
            <li className="font-bold text-xl">$125.00</li>
            <li className="text-orange font-bold text-md bg-orange-with-opacity flex justify-center items-center w-[3rem] scale-75 rounded">
              <span>50%</span>
            </li>
            <li className="absolute right-0 lg:static mr-4 text-gray-500 lg:text-xs">
              <s>$250.00</s>
            </li>
          </ul>
        </div>
        <div className="lg:flex lg:items-center lg:gap-6">
          <ul className="flex justify-around">
            <li>
              <button onClick={() => setQty((prev) => prev - 1)}>
                <img src="/icon-minus.svg" alt="minus-img" />
              </button>
            </li>
            <li>
              <input
                className="text-center font-bold lg:max-w-[5rem]"
                type="number"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
            </li>
            <li>
              <button onClick={() => setQty((prev) => prev + 1)}>
                <img src="/icon-plus.svg" alt="plus-img" />
              </button>
            </li>
          </ul>
          <div className="flex gap-4 items-center justify-center bg-orange rounded-lg text-white min-h-[3rem] mt-6 lg:w-[14rem] lg:mb-5">
            <img src="/icon-cart-white.svg" alt="cart-img" />
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
