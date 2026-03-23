import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

import { poppins } from "./fonts";
import { truculenta } from "./fonts";

export const metadata = {
  metadataBase: new URL("https://undangan-jeni-sodik.vercel.app"),
  title: "The Wedding of Jeni & Sodik",
  description:
    "Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan Jeni & Sodik.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "The Wedding of Jeni & Sodik",
    description:
      "Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan Jeni & Sodik.",
    url: "/",
    siteName: "Undangan Jeni & Sodik",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "The Wedding of Jeni & Sodik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wedding of Jeni & Sodik",
    description:
      "Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan Jeni & Sodik.",
    images: ["/images/thumbnail.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={truculenta.className}>{children}</body>
    </html>
  );
}
