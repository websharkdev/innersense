import Link from "next/link";

type Props = {
  link: string;
};

const HeaderItem = ({ link }: Props) => {
  return (
    <Link
      href={`/${link.toLocaleLowerCase()}`}
      className="text-sm text-blue-950 font-medium hover:text-purple-600 transition-all"
    >
      {link}
    </Link>
  );
};

export default HeaderItem;
