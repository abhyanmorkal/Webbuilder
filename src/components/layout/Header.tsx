"use client";
import Link from "next/link";
import logo from "../../../public/assets/logo.svg";
import Button from "../common/Button";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../global/mode-toggle";

const Nav = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className="fixed w-full top-0 left-0 z-30">
      <nav className="max-w-screen-xxl mx-auto min-h-20 flex items-center justify-between px-4 lg:px-[70px] py-[10px] overflow-hidden border-b border-black-500 backdrop-blur-2xl">
        <div id="logo">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className=" w-[180px] dark:filter dark:invert"
            />
          </Link>
        </div>
        <div
          id="link"
          className="hidden lg:flex gap-20 font-bold text-xl leading-none"
        >
          {link.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={`text-black-500 flex items-center gap-1.5 ${
                pathname === path ? "font-bold" : ""
              }`} // Highlight active link
            >
              {pathname === path && ( // Check if the link is active
                <span
                  className="inline-block w-1.5 h-1.5 bg-lime-600 rounded-full"
                  style={{
                    boxShadow: "0 0 0.5em #00ff19",
                  }}
                ></span>
              )}
              {name}
            </Link>
          ))}
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Link href={"/agency"}>
            <Button title="Login Kro" />
          </Link>
          <UserButton />
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Nav;

const link = [
  {
    name: "Design",
    path: "/design",
  },
  {
    name: "Development",
    path: "/development",
  },
  {
    name: "SMM",
    path: "/smm",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Experiment",
    path: "/experiment",
  },
];
