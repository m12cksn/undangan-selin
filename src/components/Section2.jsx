import React from "react";
import { berkshire } from "@/app/fonts";
import Image from "next/image";
import { useState, useEffect } from "react";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";
import TopCenter from "@/components/ornaments/TopCenter";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  return (
    <div id="section2" className="flex justify-center">
      <div
        className="bg-[url('/images/selin.jpg')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-28 w-full flex justify-center items-center overflow-hidden "
        id="opening-section"
      >
        <TopCenter />
        <div className="flex flex-col items-center">
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-slate-900 text-xl text-center mb-2`}
          >
            The Wedding of
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-4xl text-slate-900 text-center mb-5`}
          >
            Selin ❤️ Aan
          </h2>
          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-center px-5 text-sm leading-normal text-slate-700 mb-7"
          >
            Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud mengundang Anda di
            acara Kami. Merupakan suatu kehormatan dan kebahagiaan bagi kami
            sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan
            memberikan doa restu pada
          </p>
          <Image
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="max-w-sm mb-7"
            src="/images/openingselin.webp"
            width={500}
            height={500}
            alt="Cruise"
            priority={true}
          />
          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-center px-5 text-sm leading-normal text-slate-700 mb-7"
          >
            Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud mengundang Anda di
            acara Kami. Merupakan suatu kehormatan dan kebahagiaan bagi kami
            sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan
            memberikan doa restu pada
          </p>
        </div>
        <Image
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-[38rem] object-contain absolute -top-20  "
          src="/images/center.webp"
          width={500}
          height={500}
          alt="Cruise"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Section2;
