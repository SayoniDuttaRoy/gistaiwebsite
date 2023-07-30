import { logo10050 } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
    <div className="w-full shadow-navbarShadow h-20 sticky top-0 z-50 bg-white">
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
            <div>
                <Image src={logo10050} alt="logo" />
            </div>
            <div className="hidden mdl:inline-flex items-center gap-5">
                <ul className="flex text-[18px] gap-5">
                    <Link href="#home">
                        <li>Home</li>
                    </Link>
                    <Link href="#demo-video">
                        <li>How to Use</li>
                    </Link>
                    <Link href="#features">
                        <li>Features</li>
                    </Link>
                    <Link href="https://forms.gle/QCvWzQDoSn31AusA8" target="__blank">
                        <li>Contact Us</li>
                    </Link>
                </ul>
                <a href="https://chrome.google.com/webstore/detail/gist-ai/elmpkhkdonhdbkeaigkblbgckcihahoc" target="__blank">
                    <button className="px-4 py-2 rounded-md text-textWhite bg-bgRed hover:bg-bgRedHover">
                        Start Now
                    </button>
                </a>
            </div>
        </div>
    </div>
    );
};

export default Navbar;