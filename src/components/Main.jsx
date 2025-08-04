import React from "react";
import { berkshire } from "@/app/fonts";
import Image from "next/image";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import TopLeft from "@/components/ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";

import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const Main = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  return (
    <div id="main" className="flex justify-center">
      <div
        className="bg-[url('/images/selin.jpg')] bg-cover relative bg-center max-w-sm py-40 w-full flex justify-center items-center overflow-hidden"
        id="main-section"
      >
        {/* Overlay gelap transparan */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Konten utama */}
        <div className="z-10 text-white text-center">
          <Image
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-96 animate-wiggle animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both"
            src="/images/selinmain.webp"
            width={500}
            height={500}
            alt="Cruise"
            priority={true}
          />
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-xl mb-2`}
          >
            The Wedding of
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-4xl mb-2`}
          >
            Selin ❤️ Aan
          </h2>
          <Timer />
        </div>

        {/* Ornamen */}
        <TopLeft />
        <TopRight />
      </div>
    </div>
  );
};

export default Main;
