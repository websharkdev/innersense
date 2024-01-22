"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "usehooks-ts";

import { AlignRight } from "lucide-react";

const Header = () => {
  const isMD = useMediaQuery("(max-width: 520px)");
  const menu = ["Home", "Styles", "Store", "Contacts"];
  return (
    <div className="min-h-14 flex bg-white justify-between items-center w-full absolute top-0 z-50">
      <div className="container flex justify-between items-center w-full">
        <Link
          href={`/`}
          className="text-sm text-blue-950 font-medium hover:text-purple-600 transition-all"
        >
          <Image
            src={"/logo.svg"}
            alt="logo / main"
            width={128}
            height={20}
            className="h-5 w-32 aspect-video"
          />
        </Link>

        {isMD ? (
          <button className="w-8 h-8 aspect-square bg-slate-50 flex justify-center items-center rounded-md">
            <AlignRight className="w-4 h-4 aspect-square object-contain text-slate-800" />
          </button>
        ) : (
          <div className="flex gap-4 items-center">
            {menu.map((link, id) => (
              <Link
                key={`${link.toLocaleLowerCase()}_${id}`}
                href={`/${link.toLocaleLowerCase()}`}
                className="text-sm text-blue-950 font-medium hover:text-purple-600 transition-all"
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
