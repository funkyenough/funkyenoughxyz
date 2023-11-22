import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex max-w-lg justify-center mx-auto space-x-5">
      <Link href="https://twitter.com/Funky_Enough_">
        <Image src="/x.svg" alt="X" width={20} height={20} />
      </Link>
      <Link href="https://github.com/funkyenough">
        <Image src="/github.svg" alt="Github" width={20} height={20} />
      </Link>
      <Link href="https://osu.ppy.sh/users/2390581">
        <Image src="/osu.svg" alt="Osu" width={20} height={20} />
      </Link>
    </div>
  );
}

export default Footer;
