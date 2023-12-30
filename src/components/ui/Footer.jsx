import React from "react";

const Footer = () => {
  return (
    <div className="py-12 content-wrapper flex justify-between items-center text-gray-300 font-navFont">
      <p>
        Made with ❤️ by
        <span className="ml-2 hover:underline transition-all">
          <a
            href="https://github.com/aimun-naharr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aimun nahar
          </a>
        </span>
      </p>
      <div className="flex flex-col items-center justify-center">
        <a
          href="https://github.com/aimun-naharr/oeixs-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase hover:underline transition-all"
        >
          Give it a star⭐
        </a>
      </div>
    </div>
  );
};

export default Footer;
