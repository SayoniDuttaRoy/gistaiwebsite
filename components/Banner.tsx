import { chromeLogo } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Banner = () => {
    return (
        <section id="home" className="max-w-contentContainer mx-auto flex flex-col gap-4 items-center mt-10">
            <h1 className="text-4xl font-titleFont font-semibold flex flex-col sml:items-center gap-4">
                Focus on best parts
                <span>Skim the rest</span>
            </h1>
            <p className="text-2xl text-textGrey text-center font-medium max-w-[650px] mt-4">
                Summarize any webpage or Youtube video in 1 click using ChatGPT AI. 
                <br/>Even better, read more details about the summary or jump straight to that time in a Youtube video. 
            </p>
            <div>
                <a href="https://chrome.google.com/webstore/detail/gist-ai/elmpkhkdonhdbkeaigkblbgckcihahoc" target="__blank">
                    <button className="inline-block w-auto text-2xl flex items-center font-titleFont text-textWhite bg-bgRed rounded-md hover:bg-bgRedHover px-4 py-3 mt-4 gap-4">
                        <Image src={chromeLogo} alt="chrome icon"  className="h-12 w-12"/>
                        <span>Download Free Extension</span>
                    </button>
                </a>
            </div>
            <div className="mt-5 text-xl">
                <a href="#testimonials" className="underline text-blue-500">What customers are saying about us?</a>
            </div>
        </section>
    );
};

export default Banner;