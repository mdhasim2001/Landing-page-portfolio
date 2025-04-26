import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="mt-20 py-12 ">
      <hr />
      <div className="flex items-center justify-between mt-12">
        <div className="flex items-center justify-center gap-3">
          <a
            className="text-2xl hover:text-[#1877F2]"
            href="https://www.facebook.com/hasim.nana.3?mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="text-2xl hover:text-[#1DA1F2]"
            href="https://x.com/mdhasim050?t=4CVi4JLyqe-yoUqp_84YDg&s=09"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            className="text-2xl hover:text-[#EC375B]"
            href="https://www.instagram.com/mdhasim.nana?igsh=MTN3bDgzYXF2MjE3NA=="
            target="_blank"
          >
            <FaInstagramSquare />
          </a>
        </div>
        <p className="text-center text-[14px]">
          2024 MD Hasim. All rights reserved.
        </p>
      </div>
    </div>
  );
};
