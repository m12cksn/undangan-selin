import React from "react";
import Image from "next/image";
import { berkshire } from "@/app/fonts";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineShareLocation } from "react-icons/md";
import Timer from "./Timer";
import Maps from "./Maps";
import TopLeft from "./ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const SaveTheDate = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  const contents = [
    {
      title: "Akad Nikah",
      img: "/images/marriage.png",
      day: "Senin, 11 Agustus, 2025",
      time: "at 08:00 WIB - Selesai",
      alamat: "Jl. Teri, RT. 002 / 014 Kel-Cilacap. Kec. Cilacap - Selatan",
    },
    {
      title: "Resepsi Pernikahan",
      img: "/images/wedding.png",
      day: "Senin, 11 Agustus, 2025",
      time: "at 10:00 WIB - selesai",
      alamat: "Jl. Teri, RT. 002 / 014 Kel-Cilacap. Kec. Cilacap - Selatan",
    },
  ];
  return (
    <div id="date">
      <div className="flex justify-center">
        <div className="bg-[url('/images/selin.jpg')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-28 w-full flex flex-col justify-center items-center overflow-hidden px-8">
          <div className="w-full backdrop-filter backdrop-blur-lg bg-white/50 bg-center py-5 ">
            {contents.map((content, index) => (
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                key={index}
                className="z-50 flex flex-col justify-center items-center mb-5"
              >
                <h1
                  className={`${berkshire.className} xl:text-xl text-slate-700 text-xl text-center mb-1`}
                >
                  {content.title}
                </h1>

                <Image
                  className="w-7"
                  src="/images/marriage.png"
                  width={500}
                  height={500}
                  alt="akad"
                  priority={true}
                />
                <div className="mt-4 flex flex-col justify-center items-center gap-1 ">
                  <h1 className=" text-center uppercase  text-slate-600">
                    {content.day}
                  </h1>
                  <h1 className="text-center  text-sm text-slate-600 flex items-center justify-center ">
                    <span className="mr-1">
                      <IoTimeOutline />
                    </span>
                    {content.time}
                  </h1>
                  <h1 className="text-center  text-sm text-slate-600  flex items-start">
                    {content.alamat}
                  </h1>
                </div>
              </div>
            ))}
            <Timer />
          </div>
          <div className="">
            <Maps />
          </div>
          <TopLeft />
          <TopRight />
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;
