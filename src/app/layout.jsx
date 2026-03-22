import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

import { poppins } from "./fonts";
import { truculenta } from "./fonts";

export const metadata = {
  title: "Undangan Jeni dan Sodik",
  description: "Undangan Pernikahan Jeni ❤️ Sodik",
  icons: {
    icon: "/favicon.ico", // Pastikan sesuai dengan path di folder public
  },
  openGraph: {
    title: "Undangan Jeni dan Sodik",
    description: "Undangan Pernikahan Jeni ❤️ Sodik",
    url: "https://undangan-jeni-sodik.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://undangan-jeni-sodik.vercel.app/images/gallery/image.png",
        width: 1200,
        height: 630,
        alt: "Undangan Pernikahan Jeni ❤️ Sodik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Pernikahan Jeni ❤️ Sodik",
    description: "Pernikahan Jeni Nur Azizah dan Sodik Hermawan",
    images: ["https://undangan-jeni-sodik.vercel.app/images/gallery/image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={truculenta.className}>{children}</body>
    </html>
  );
}
