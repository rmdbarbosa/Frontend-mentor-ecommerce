import "./globals.css";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";

const kumbh_sans = Kumbh_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce - Frontend Mentor",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbh_sans.className}>{children}</body>
    </html>
  );
}
