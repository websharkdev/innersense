import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const HeaderLogo = memo(() => {
  return (
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
  );
});

HeaderLogo.displayName = "Heaedr-Logo";

export default HeaderLogo;
