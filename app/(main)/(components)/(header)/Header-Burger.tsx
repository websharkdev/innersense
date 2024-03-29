import { AlignRight } from "lucide-react";
import { memo } from "react";

const HeaedrBurger = memo(() => {
  return (
    <button className="w-8 h-8 aspect-square bg-slate-50 flex justify-center items-center rounded-md">
      <AlignRight className="w-4 h-4 aspect-square object-contain text-slate-800" />
    </button>
  );
});

HeaedrBurger.displayName = "Heaedr-Burger";

export default HeaedrBurger;
