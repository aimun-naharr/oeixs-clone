import React, { useState } from "react";

export default function MobileNav() {
  const [active, setActive] = useState(false);
  return (
    <div className="w-screen  fixed top-0 left-0 sm:hidden px-6 ">
      <div className="flex w-full justify-between items-center">
        <div className="w-32">
          <img
            src="https://oeixs.com/assets/oeixs_logo.svg"
            alt="oeixs-logo"
            className="object-cover"
          />
        </div>
        {/* menu button */}
        <div
          className=" cursor-pointer menu-icon"
          role="button"
          onClick={() => setActive(!active)}
        >
          <div className={`burger ${active ? "burgerActive" : ""}`}></div>
          <div></div>
        </div>
        {/* menu button */}
      </div>
    </div>
  );
}
