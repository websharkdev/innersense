"use client";

import { lazy } from "react";
import { useMediaQuery } from "usehooks-ts";

const HeaderLogo = lazy(() => import("./Header-Logo"));
const HeaderItem = lazy(() => import("./Header-Item"));
const HeaedrBurger = lazy(() => import("./Header-Burger"));

const Header = () => {
  const isMD = useMediaQuery("(max-width: 520px)");

  const menu = ["Home", "Styles", "Store", "Contacts"]; //
  return (
    <div className="min-h-14 flex bg-white justify-between items-center w-full absolute top-0 z-50">
      <div className="container flex justify-between items-center w-full">
        <HeaderLogo />

        {isMD ? (
          <HeaedrBurger />
        ) : (
          <div className="flex gap-4 items-center">
            {menu.map((link, id) => (
              <HeaderItem
                link={link}
                key={`${link.toLocaleLowerCase()}_${id}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Header.displayName = "Heaedr";

export default Header;
