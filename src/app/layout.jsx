import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

import { poppins } from "./fonts";
import { truculenta } from "./fonts";

export const metadata = {
  title: "Undangan Selin dan Aan",
  description: "Undangan Pernikahan Selin ❤️ Aan",
  icons: {
    icon: "/favicon.ico", // Pastikan sesuai dengan path di folder public
  },
  openGraph: {
    title: "Undangan Selin dan Aan",
    description: "Undangan Pernikahan Selin ❤️ Aan",
    url: "https://undanganarsyad.vercel.app",
    type: "website",
    images: [
      {
        url: "https://undangankhitanarsyad.vercel.app/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Undangan Pernikahan Selin ❤️ Aan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Arsyad",
    description: "Walimatul Khitan Arsyad Haafizh Virendra",
    images: ["https://undangankhitanarsyad.vercel.app/images/thumbnail.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={truculenta.className}>{children}</body>
    </html>
  );
}
