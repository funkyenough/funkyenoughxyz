/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import Image from "next/image";
// import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

export default function Header() {
  return (
    <header className="OutermostBox sticky top-0 flex items-center justify-between shadow-sm px-2 py-2 mx-5">
      <div className="LeftBoxLogo">
        <Link href="https://fracton.ventures">
          <Image
            src={
              "https://fracton.ventures/static/fracton-rec-black-7c41d24d2b0cd8d9f9aa5c6c34e11751.png"
            }
            alt={"Logo"}
            width={120}
            height={120}
          />
        </Link>
      </div>
      <div className="flex space-x-2 font-bold">
        <div className="">
          <Link href="/#Intro">Home</Link>
        </div>
        <div className="">
          <Link href="/#Projects">Portfolio</Link>
        </div>
        <div className="">
          <Link href="/#Skills">Skills</Link>
        </div>
        <div className="">
          <Link href="/#Contact">Contact</Link>
        </div>
        {/* <div>
          <LocaleSwitcher />
        </div>
        <div className="LightDarkMode flex">
          <div className="Sun h-5 w-5">
            <SunIcon />
          </div>
          <div className="Toggle"></div>
          <div className="Moon h-5 w-5">
            <MoonIcon />
          </div>
        </div> */}
      </div>
    </header>
  );
}
