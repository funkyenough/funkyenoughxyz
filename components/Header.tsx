/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import Image from "next/image";
// import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

export default function Header() {
  return (
    <header className="OutermostBox sticky top-0 flex items-center justify-between shadow-sm px-2 py-2">
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
      <div className=" flex space-x-2 font-bold">
        <div className="About">
          <Link href="https://fracton.ventures/jp/about">about</Link>
        </div>
        <div className="MEV-Boost">
          <Link href="https://boost.flashbots.net/">MEVBoost</Link>
        </div>
        <div className="Forum">
          <Link href="https://collective.flashbots.net/">Forum</Link>
        </div>
        <div className="JoinUs">
          <Link href="https://www.flashbots.net/jobs">Join Us</Link>
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
