/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current && node.current.contains(e.target as Node)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 flex justify-between bg-black px-5 py-2 text-white shadow-sm">
      <div>
        <Link href="https://funkyenough.xyz">
          <div className="text-lg font-bold">Funkyenough</div>
        </Link>
      </div>
      <div>
        <div className="hidden flex-row space-x-4 font-bold md:flex">
          <Link href="/#Skills">Skills</Link>
          <Link href="/#Projects">Projects</Link>
          <Link href="/#Contact">Contact</Link>
        </div>
        <div className="relative md:hidden" ref={node}>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 flex flex-col space-x-4 space-y-4 rounded-sm bg-[#202020] p-2 text-right font-bold">
              <Link href="/#Projects">Portfolio</Link>
              <Link href="/#Skills">Skills</Link>
              <Link href="/#Contact">Contact</Link>
            </div>
          )}
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
