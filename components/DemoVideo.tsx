import React from "react";
import SectionTitle from "./SectionTitle";
import { howToUseGist } from "@/public/assets";
import Image from "next/image";

const DemoVideo = () => {
    return (
        <section id="demo-video" className="max-w-containerSmall max-auto py-10 flex flex-col gap-8 mt-10">
            <SectionTitle title="How to Use" />
            <div>
                <ol className="list-decimal list-inside text-xl">
                    <li className="p-1">Install the <a href="https://chrome.google.com/webstore/detail/gist-ai/elmpkhkdonhdbkeaigkblbgckcihahoc?utm_source=gist_ai_website" target="__blank" className="underline text-blue-500">Gist AI</a> extension from the Chrome Web Store</li>
                    <li className="p-1">Pin the Gist AI extension to the toolbar</li>
                    <li className="p-1">Open any website, Youtube video or PDF and click on the extension icon to summarize it</li>
                    <li className="p-1">To summarize a PDF file stored on your computer, upload it in the PDF tab</li>
                </ol>
            </div>
            <div>
                {/* TODO(sdr): Add demo video for v2 and remove image */}
                {/* <video controls width="100%" loop className="rounded-lg">
                    <source src="/assets/videos/DemoVideowithYT.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <Image src={howToUseGist} alt="How to use gist" className="rounded-lg"></Image>
            </div>
        </section>
    );
}

export default DemoVideo;
