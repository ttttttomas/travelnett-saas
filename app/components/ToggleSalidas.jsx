"use client";

import { useState } from "react";
import Link from "next/link";
import Web from "./icons/Web";

export default function ToggleSalidas() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="bg-primary cursor-pointer transition-all duration-300 text-white text-3xl font-medium w-max absolute -right-9 rounded-full">
        {toggle ? (
          <p className="text-[22px] pr-12 py-3 pl-2">x</p>
        ) : (
          <p className="pr-10 p-2">+</p>
        )}
      </div>
      {toggle && (
        <ul
          className={`flex absolute transition-all ${
            toggle ? "opacity-100" : "opacity-0"
          } duration-300 right-11 top-30 bg-primary z-40 rounded-lg shadow-md shadow-black/80 gap-2 p-2 text-white`}>
          <Link href="/">
            <Web />
          </Link>
          <Link href="/">
            <Web />
          </Link>
          <Link href="/">
            <Web />
          </Link>
          <Link href="/">
            <Web />
          </Link>
          <Link href="/">
            <Web />
          </Link>
        </ul>
      )}
      {toggle && (
        <div className="bg-[#3DADFF] transition-all duration-300 z-10 size-4 rounded-full absolute right-8 top-33"></div>
      )}
    </>
  );
}
