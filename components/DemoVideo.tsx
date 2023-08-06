import React from "react";
import SectionTitle from "./SectionTitle";
import { keyPointsFromWebpageAndYt } from "@/public/assets";

const DemoVideo = () => {
    return (
        <section id="demo-video" className="max-w-containerSmall max-auto py-10 flex flex-col gap-8 mt-10">
            <SectionTitle title="How to Use" />
            <div>
                <ol className="list-decimal list-inside text-xl">
                    <li className="p-1">Install the <a href="https://chrome.google.com/webstore/detail/gist-ai/elmpkhkdonhdbkeaigkblbgckcihahoc" className="underline text-blue-500">Gist AI</a> extension from the Chrome Web Store</li>
                    <li className="p-1">Open any webpage or Youtube video and click on the extension icon to summarize it</li>
                    <li className="p-1">Click on Read More button to dive deeper into parts that interest you</li>
                </ol>
            </div>
            <div>
                <video controls width="100%" loop className="rounded-lg">
                    <source src="/assets/videos/DemoVideowithYT.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}

export default DemoVideo;