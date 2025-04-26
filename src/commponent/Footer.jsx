import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLink,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="mt-20 py-12 ">
      <hr />
      <div className="md:flex items-center justify-between mt-12">
        <div className="flex items-center justify-center gap-3 mb-5 md:mb-0">
          <a
            className="text-2xl hover:text-[#1877F2]"
            href="https://www.linkedin.com/in/md-hasim-nanacoder"
            target="_blank"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/48/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a
            className="text-2xl hover:text-[#1877F2]"
            href="https://github.com/mdhasim2001?tab=repositories"
            target="_blank"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/48/github--v1.png"
              alt="github--v1"
            />
          </a>
          <a
            className="text-2xl hover:text-[#1877F2]"
            href="https://www.facebook.com/hasim.nana.3?mibextid=ZbWKwL"
            target="_blank"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/48/facebook.png"
              alt="facebook"
            />
          </a>
        </div>
        <p className="text-center text-[14px]">
          2024 MD Hasim. All rights reserved.
        </p>
      </div>
    </div>
  );
};
