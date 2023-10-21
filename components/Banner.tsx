import { chromeLogo } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Banner = () => {
    return (
        <section id="home" className="max-w-contentContainer mx-auto flex flex-col gap-4 items-center mt-10">
            <h1 className="text-3xl font-titleFont font-semibold flex flex-col sml:items-center gap-4">
                One extension to summarize everything!
                <span className="text-xl">Website . YouTube video . Online PDF . Local PDF</span>
            </h1>
            <div className="text-xl text-center font-medium max-w-[650px] mt-4">
                <p>Even better, deep dive into the summary source for clarity or jump right to that moment in the YouTube video.</p>
            </div>
            
            <span className="text-lg text-textGrey text-center font-medium max-w-[650px]">Powered by ChatGPT</span>
            <div>
                <a href="https://chrome.google.com/webstore/detail/gist-ai/elmpkhkdonhdbkeaigkblbgckcihahoc?utm_source=gist_ai_website" target="__blank">
                    <button className="inline-block w-auto text-2xl flex items-center font-titleFont
                         text-textWhite bg-bgRed rounded-md hover:bg-bgRedHover shadow-lg
                         px-4 py-3 mt-4 gap-4">
                        <Image src={chromeLogo} alt="chrome icon"  className="h-12 w-12"/>
                        <span>Download Free Extension</span>
                    </button>
                </a>
            </div>
            <div className="mt-5 text-xl">
                <a href="#testimonials" className="underline text-textBlue">What customers are saying about us?</a>
            </div>
            <div className="mt-[10px]">
                <a href="https://www.producthunt.com/posts/gist-ai?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-gist&#0045;ai"
                   target="_blank">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=413513&theme=light&period=daily"
                         alt="Gist&#0032;AI - Free&#0032;website&#0044;&#0032;YouTube&#0044;&#0032;PDF&#0032;summarizer&#0044;&#0032;powered&#0032;by&#0032;ChatGPT | Product Hunt"
                         className="w-[250px] h-[54px]" />
                </a>
            </div>
        </section>
    );
};

export default Banner;
