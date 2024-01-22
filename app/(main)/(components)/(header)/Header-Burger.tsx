import { AlignRight } from "lucide-react";
import React from "react";

type Props = {};

const HeaedrBurger = (props: Props) => {
  return (
    <button className="w-8 h-8 aspect-square bg-slate-50 flex justify-center items-center rounded-md">
      <AlignRight className="w-4 h-4 aspect-square object-contain text-slate-800" />
    </button>
  );
};

export default HeaedrBurger;
