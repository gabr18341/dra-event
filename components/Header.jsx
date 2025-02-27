"use client";
import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Image from "next/image";
import { ShinyButton } from "./magicui/shiny-button";


const Header = () => {
  return (
    <header className=" fixed top-0 left-0 w-full z-[500] py-2">
      <div className="container px-4 md:px-12 flex justify-between items-center">
        <div className="header-logo p-1">
            <Link href="/">
                <Image width={250} height={120} src="/DRA LOGO light.png" alt="dra - logo" />
                <Image className="dark-logo" width={100} height={80} src="/DRA LOGO dark.png" alt="dra - logo" />
            </Link>
        </div>
        <nav>
            <ul className="flex justify-center gap-4 ">
                <li>
                    <Link href="#"><ShinyButton>Home</ShinyButton></Link>
                </li>
                <li>
                <Link href="#"><ShinyButton>About</ShinyButton></Link>
                </li>
                <li>
                <Link href="#"><ShinyButton>Services</ShinyButton></Link>
                </li>
                <li>
                <Link href="#"><ShinyButton>Contact Us</ShinyButton></Link>
                </li>
            </ul>
        </nav>
        <div className="social-icons">
        <div className=" relative">
        <Dock className="border-0 m-0" iconMagnification={60} iconDistance={100}>
            <DockIcon className="bg-black/10 dark:bg-white/10">
                <Facebook className="size-full text-white" />
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10">
                <Instagram className="size-full text-white" />
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10">
                <Youtube className="size-full text-white" />
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10">
                <Icons.x className="size-full text-white" />
            </DockIcon>
        </Dock>
        </div>
        </div>
      </div>
    </header>
  );
};

const Icons = {
    x: (props) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>X</title>
          <path
            fill="currentColor"
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          />
        </svg>
      ),
  };

export default Header;
