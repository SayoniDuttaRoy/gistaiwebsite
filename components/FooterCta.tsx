import React from "react";
import SectionTitle from "./SectionTitle";
import { chromeLogo } from "@/public/assets";
import Image from "next/image";

const FooterCta = () => {
    return (
        <section id="home" className="max-w-contentContainer mx-auto flex flex-col gap-4 items-center mt-10">
            <SectionTitle title="Ready to try it out?"/>
            <div>
                <a href="https://chrome.google.com/webstore/detail/gist-ai/elmpkhkdonhdbkeaigkblbgckcihahoc?utm_source=gist_ai_website" target="__blank">
                    <button className="inline-block w-auto text-2xl flex items-center font-titleFont text-textWhite bg-bgRed rounded-md hover:bg-bgRedHover px-4 py-3 mt-4 gap-4">
                        <Image src={chromeLogo} alt="chrome icon"  className="h-12 w-12"/>
                        <span>Download Free Extension</span>
                    </button>
                </a>
            </div>
        </section>
    );
};

export default FooterCta;
