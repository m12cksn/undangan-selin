import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const Maps = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className=" flex flex-col justify-center items-center shadow max-w-xs h-auto mt-7 bg-white/50 backdrop-blur  "
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1275.3835890803055!2d109.0174652696308!3d-7.730218670600489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDMnNDguOCJTIDEwOcKwMDEnMDUuMiJF!5e1!3m2!1sen!2sid!4v1754318914600!5m2!1sen!2sid"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="h-80 max-w-xs p-5"
      ></iframe>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.45409161618545!2d109.01255836827778!3d-7.723671715221728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6513378c8260ad%3A0x43332280584d703c!2sELI%20(English%20Language%20Institute)!5e0!3m2!1sen!2sid!4v1682776393362!5m2!1sen!2sid"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 max-w-xs p-5"
      ></iframe> */}
      <h1 className="px-5 pb-5 text-slate-700   ">
        Jl. Teri, RT. 002 / 014 Kel-Cilacap. Kec. Cilacap - Selatan
      </h1>
    </div>
  );
};

export default Maps;
