import React from "react";
import Image from "next/image";
import ImageGallery from "@/components/imageGallery";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";
import TopLeft from "./ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import { berkshire } from "@/app/fonts";

const Gallery = () => {
  return (
    <div id="gallery">
      <div className="flex justify-center  mx-auto">
        <div className="bg-[url('/images/selin.jpg')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-28 w-full flex flex-col justify-center items-center overflow-hidden px-8">
          <h1
            className={`${berkshire.className} xl:text-xl text-slate-700 text-3xl text-center mb-5`}
          >
            Gallery
          </h1>
          <ImageGallery />
          <BtmLeft />
          <BtmRight />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
