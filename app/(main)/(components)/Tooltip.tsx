import { Html } from "@react-three/drei";

type Props = {
  tooltip: {
    positions: any;
    name: string;
    subtitle: string;
    price: number;
  };
};

const Tooltip = ({ tooltip }: Props) => {
  return (
    <Html position={tooltip.positions} occlude>
      <div className="bg-white w-2 h-2 aspect-square rounded-full hover:w-4 hover:h-4 transition-all group flex items-center cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="group-hover:flex gap-2 sm:gap-4 justify-between hidden ml-6 bg-slate-50 px-4 rounded-xl min-w-max md:min-w-52 py-2">
          <div className="flex flex-col">
            <span className="text-sm font-medium">{tooltip.name}</span>
            <span className="text-xs">{tooltip.subtitle}</span>
          </div>
          <h6 className="text-sm sm:text-lg font-semibold">
            &#36;{tooltip.price}
          </h6>
        </div>
      </div>
    </Html>
  );
};

export default Tooltip;
