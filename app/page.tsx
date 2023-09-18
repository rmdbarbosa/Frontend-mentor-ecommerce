"use client";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { CartProvider } from "./context/cart";

export default function Home() {
  return (
    <main>
      <CartProvider>
        <Navbar />
        <ProductCard />
      </CartProvider>
    </main>
  );
}
