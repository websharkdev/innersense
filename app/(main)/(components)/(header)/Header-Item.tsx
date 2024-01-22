import Link from "next/link";
import { memo } from "react";

type Props = {
  link: string;
};

const HeaderItem = memo(({ link }: Props) => {
  return (
    <Link
      href={`/${link.toLocaleLowerCase()}`}
      className="text-sm text-blue-950 font-medium hover:text-purple-600 transition-all"
    >
      {link}
    </Link>
  );
});

HeaderItem.displayName = "Heaedr-Item";

export default HeaderItem;
