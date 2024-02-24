/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import Image from "next/image";
// import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

export default function Header() {
  return (
    <header className="mx-5 sticky top-0 flex justify-between shadow-sm py-2 z-40 bg-black">
      <div>
        <Link href="https://funkyenough.xyz">
          <div className="text-lg font-bold">Funkyenough</div>
        </Link>
      </div>
      <div className="flex flex-row space-x-4 font-bold">
        <div className="">
          <Link href="/#Skills">Skills</Link>
        </div>
        <div className="">
          <Link href="/#Projects">Projects</Link>
        </div>
        <div className="">
          <Link href="/#Contact">Contact</Link>
        </div>
        <div></div>
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
