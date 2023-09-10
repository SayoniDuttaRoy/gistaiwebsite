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
                    <li className="p-1">Install the <a href="https://chrome.google.com/webstore/detail/gist-ai/elmpkhkdonhdbkeaigkblbgckcihahoc?utm_source=gist_ai_website" target="__blank" className="underline text-textBlue">Gist AI</a> extension from the Chrome Web Store</li>
                    <li className="p-1">Pin the Gist AI extension to the toolbar</li>
                    <li className="p-1">Open any website, Youtube video or PDF and click on the extension icon to summarize it</li>
                    <li className="p-1">To summarize a PDF file stored on your computer, upload it in the PDF tab</li>
                </ol>
            </div>
            <div>
                <video controls width="100%" loop className="rounded-lg">
                    <source src="/assets/videos/DemoV2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <div className=" relative w-[100%]  pt-[56.25%] overflow-hidden">
                    <iframe className="w-[100%] h-[100%] top-0  left-0 absolute"
                        src="https://www.youtube.com/embed/4quMO-DUpFQ?loop=1&playlist=4quMO-DUpFQ&rel=0"  
                        title="How to use Gist AI for summarizing websites, YouTube videos and PDFs" 
                        allow="web-share">
                    </iframe>
                </div> */}
            </div>
        </section>
    );
}

export default DemoVideo;

