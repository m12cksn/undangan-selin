"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { berkshire } from "@/app/fonts";
import AOS from "aos";
import "aos/dist/aos.css";

const Opening = ({ onButtonClick }) => {
  const [nama, setNama] = useState("");

  useEffect(() => {
    AOS.init({});

    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const paramNama = searchParams.get("nama");

      if (paramNama) {
        setNama(paramNama);
      }
    }
  }, []);

  return (
    <div className="flex justify-center px-3 sm:px-0">
      <div className="bg-[url('/jeni/bgjeni.jpeg')] bg-cover relative bg-center max-w-sm w-full min-h-screen flex justify-center items-center overflow-hidden py-8 sm:py-12">
        <div className="bg-black/50 backdrop-blur-[2px] h-full w-full absolute inset-0 pointer-events-none" />

        <div className="relative z-20 w-full max-w-[22rem] sm:max-w-xs">
          <div className="bg-white/85 backdrop-blur-sm p-4 sm:p-5 rounded-md shadow-lg">
            <h1
              className={`${berkshire.className} text-slate-900 text-lg sm:text-xl text-center mb-3 sm:mb-5`}
            >
              The Wedding of
            </h1>
            <h2
              className={`${berkshire.className} text-3xl sm:text-4xl xl:text-5xl text-slate-900 text-center mb-4 sm:mb-7`}
            >
              Jeni ❤️ Sodik
            </h2>
            <Image
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="w-64 sm:w-80 xl:w-[30rem] mx-auto animate-wiggle animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both mb-4 sm:mb-5"
              src="/jeni/main.png"
              width={500}
              height={500}
              alt="Foto pengantin"
              priority={true}
            />
            <div className="w-full flex mb-3 justify-center">
              <button
                type="button"
                onClick={onButtonClick}
                className="bg-indigo-500 px-8 sm:px-11 py-2 rounded text-white tracking-wide shadow relative z-30"
              >
                Buka Undangan
              </button>
            </div>
            <h1 className="text-slate-900 mb-1 text-base sm:text-lg text-center">
              Kepada
            </h1>
            <h1 className="text-slate-900 mb-1 sm:mb-2 text-base sm:text-lg text-center">
              Bapak / Ibu / Saudara / i
            </h1>
            <h1 className="text-slate-900 mb-1 sm:mb-2 text-base sm:text-lg text-center break-words px-2">
              {nama ? decodeURIComponent(nama) : ""}
            </h1>
            <h1 className="text-slate-500 text-base sm:text-lg text-center">ditempat</h1>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-10">
          <Image
            className="w-28 sm:w-52 animate-jump animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both ease-in-out object-contain absolute -top-6 sm:-top-10 -left-6 sm:-left-10"
            src="/images/top_left.webp"
            width={500}
            height={500}
            alt="Ornamen kiri atas"
            priority={true}
          />
          <Image
            className="w-28 sm:w-52 animate-jump animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both ease-in-out object-contain absolute -top-6 sm:-top-10 -right-6 sm:-right-10"
            src="/images/top_right.webp"
            width={500}
            height={500}
            alt="Ornamen kanan atas"
            priority={true}
          />
          <Image
            className="w-28 sm:w-52 animate-jump animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both ease-in-out object-contain absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10"
            src="/images/btn_left.webp"
            width={500}
            height={500}
            alt="Ornamen kiri bawah"
            priority={true}
          />
          <Image
            className="w-28 sm:w-52 animate-jump animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both ease-in-out object-contain absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10"
            src="/images/btn_right.webp"
            width={500}
            height={500}
            alt="Ornamen kanan bawah"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Opening;
