import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className="text-xl cursor-pointer">
        Relaxing<span className="font-bold"> Koala</span>
      </div>
    </Link>
  );
};
