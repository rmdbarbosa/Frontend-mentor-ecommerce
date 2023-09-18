"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const [productCart, setProductCart] = useState();

  return (
    <main>
      <Navbar />
      <ProductCard />
    </main>
  );
}
