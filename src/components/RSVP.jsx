"use client";
import React, { useEffect, useState } from "react";
import { berkshire } from "@/app/fonts";
import AOS from "aos";
import "aos/dist/aos.css";
import { supabase } from "@/lib/supabaseClient";
import TopLeft from "./ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";

const RSVP = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [kehadiran, setKehadiran] = useState("Hadir");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    AOS.init();
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("rsvp_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setMessages(data);
    }
  };

  const handleSubmit = async () => {
    if (!nama || !pesan) {
      alert("Harap isi nama dan pesan.");
      return;
    }

    const { error } = await supabase.from("rsvp_messages").insert([
      {
        nama,
        pesan,
        kehadiran,
      },
    ]);

    if (error) {
      alert("Gagal mengirim data");
    } else {
      setNama("");
      setPesan("");
      setKehadiran("Hadir");
      fetchMessages();
    }
  };

  return (
    <div id="rsvp">
      <div className="flex justify-center mx-auto">
        <div className="bg-[url('/images/selin.jpg')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-28 w-full flex flex-col justify-center items-center overflow-hidden px-8">
          {/* Form RSVP */}
          <div className="w-full backdrop-filter backdrop-blur-lg bg-white/50 p-5 mt-3">
            <h1
              className={`${berkshire.className} text-xl text-slate-700 text-center mb-5`}
            >
              Konfirmasi Kehadiran
            </h1>
            <div className="flex flex-col gap-1">
              <label className="text-slate-800">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="h-9 p-3 shadow rounded text-gray-900"
                placeholder="Your Name ...."
              />
            </div>
            <div className="flex flex-col gap-1 mt-5">
              <label className="text-slate-800">Ucapan dan Do'a</label>
              <textarea
                rows={5}
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                className="rounded shadow p-3 text-gray-900"
              />
            </div>
            <div className="flex flex-col gap-1 mt-5">
              <label className="text-slate-800">Kehadiran</label>
              <select
                value={kehadiran}
                onChange={(e) => setKehadiran(e.target.value)}
                className="h-9 p-2 text-gray-900"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>
            <div className="flex justify-start mt-5">
              <button
                onClick={handleSubmit}
                className="px-5 py-1 bg-purple-500 rounded shadow text-slate-100"
              >
                Submit
              </button>
            </div>
          </div>

          {/* List Ucapan */}
          <div className="w-full backdrop-filter backdrop-blur-lg bg-white/50 p-5 mt-3 flex flex-col gap-3 h-96 overflow-scroll">
            <h1
              className={`${berkshire.className} text-xl text-slate-700 text-center`}
            >
              Ucapan Teman & Kerabat
            </h1>
            {messages.map((msg, index) => (
              <div key={index} className="bg-white p-3 rounded">
                <h1 className="text-slate-700">{msg.pesan}</h1>
                <p className="text-xs text-slate-500 mt-1">
                  {msg.nama} – {msg.kehadiran}
                </p>
              </div>
            ))}
          </div>

          <TopLeft />
          <TopRight />
          <BtmLeft />
          <BtmRight />
        </div>
      </div>
    </div>
  );
};

export default RSVP;
