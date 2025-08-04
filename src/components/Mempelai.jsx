import React from "react";
import { berkshire } from "@/app/fonts";
import { useState, useEffect } from "react";
import Image from "next/image";
import TopLeft from "./ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const Mempelai = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  const contents = [
    {
      img: "/images/wanitaselin.webp",
      name: "Masselina Astika",
      parent: "Putri dari Bpk. Maryanus & Ibu Sampen",
      alamat: "Jl. Teri - Cilacap Selatan",
    },
    {
      img: "/images/priaselin.webp",
      name: "Ananda Hadi Wijaya",
      parent:
        "Putra dari Bpk. Paryadi (Pensiunan kecamatan kesugihan) &  Ibu.Munawaroh",
      alamat: "Gumilir - Cilacap Utara",
    },
  ];

  return (
    <div className="flex justify-center">
      <div
        className="bg-[url('/images/selin.jpg')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-28 w-full flex justify-center items-center overflow-hidden "
        id="opening-section"
      >
        <div className="flex flex-col items-center">
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-slate-900 text-xl text-center mb-7`}
          >
            Mempelai
          </h1>
          {contents.map((content, index) => (
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className=" flex mt-5 flex-col items-center h-full  bg-white-0 rounded-md bg-clip-padding backdrop-filter py-3 backdrop-blur-md bg-opacity-40 border border-gray-100"
            >
              <Image
                className="w-64 mb-7"
                src={content.img}
                width={500}
                height={500}
                alt="Cruise"
                priority={true}
              />
              <h1
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className={`${berkshire.className} text-slate-900 text-2xl text-center mb-2`}
              >
                {content.name}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-center px-5 text-sm leading-normal text-slate-700 "
              >
                {content.parent}
              </p>
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-center px-5 text-sm leading-normal text-slate-700 "
              >
                {content.alamat}
              </p>
            </div>
          ))}
          <div>
            <Image
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="w-24 py-3 object-contain "
              src="/images/love.png"
              width={500}
              height={500}
              alt="Cruise"
              priority={true}
            />
          </div>
        </div>
        <TopLeft />
        <TopRight />
        <BtmLeft />
        <BtmRight />
      </div>
    </div>
  );
};

export default Mempelai;
