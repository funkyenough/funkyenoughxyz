import Link from "next/link";
import Image from "next/image";
import Form from "./Form";

function Footer() {
  return (
    <div id="Contact">
      <div className="my-5 text-center text-lg font-bold">Contact</div>
      <Form />
      <div className="mx-auto my-5 flex max-w-lg justify-center space-x-5">
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
    </div>
  );
}

export default Footer;
