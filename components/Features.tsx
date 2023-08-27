import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { featureReadMore, featureSaveTime, featureJumpToYtTime,featurePdf, featureBreakIntoBlocks } from "@/public/assets";

const Features = () => {
    return (
        <section id="features" className="max-w-containerSmall max-auto py-10 flex flex-col gap-10 mt-10">
            <SectionTitle title="Main Features" />
            {/* Feature 1 */}
            <div className="w-full flex items-center justify-center gap-10 flex-wrap mdl:flex-nowrap">
                <div className="w-full flex flex-col gap-6 lgl:justify-between items-begin">
                    <p className="font-titleFont text-textRed text-2xl font-bold">Save time</p>
                    <p className="text-xl">Instantly extracts key points from long articles, YouTube videos or PDFs in 1 click.</p>
                </div>
                <div className="max-w-imageContainer">
                    <Image className="object-contain rounded-lg" src={featureSaveTime} alt="extract key points from website and youtube videos" />
                </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full flex items-center justify-center gap-10 flex-wrap mdl:flex-nowrap mt-20">
                <div className="w-full flex flex-col gap-6 lgl:justify-between items-begin">
                    <p className="font-titleFont text-textRed text-2xl font-bold">Read More of what you like</p>
                    <p className="text-xl">
                        Our unique Read More feature allows you to deep-dive into the source of the summaries that interest you the most.
                        <br />No more fluff or distractions!
                    </p>
                </div>
                <div className="max-w-imageContainer">
                    <Image className="object-contain rounded-lg" src={featureReadMore} alt="forward to timestamp in youtube video" />
                </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full flex items-center justify-center gap-10 flex-wrap mdl:flex-nowrap mt-20">
                <div className="w-full flex flex-col gap-6 lgl:justify-between items-begin">
                    <p className="font-titleFont text-textRed text-2xl font-bold">Jump to core segments of a YouTube video</p>
                    <p className="text-xl">
                        Quickly skim through the summary and only watch the parts of the YouTube video which are relevant to you.
                    </p>
                </div>
                <div className="max-w-imageContainer">
                    <Image className="object-contain rounded-lg" src={featureJumpToYtTime} alt="forward to timestamp in youtube video" />
                </div>
            </div>
            {/* Feature 4 */}
            <div className="w-full flex items-center justify-center gap-10 flex-wrap mdl:flex-nowrap mt-20">
                <div className="w-full flex flex-col gap-6 lgl:justify-between items-begin">
                    <p className="font-titleFont text-textRed text-2xl font-bold">Summarize any PDF</p>
                    <p className="text-xl">
                        With Gist AI, you can get summaries for PDFs found online as well as those saved on your device.
                    </p>
                </div>
                <div className="max-w-imageContainer">
                    <Image className="object-contain rounded-lg" src={featurePdf} alt="forward to timestamp in youtube video" />
                </div>
            </div>
            {/* Feature 5 */}
            <div className="w-full flex items-center justify-center gap-10 flex-wrap mdl:flex-nowrap mt-20">
                <div className="w-full flex flex-col gap-6 lgl:justify-between items-begin">
                    <p className="font-titleFont text-textRed text-2xl font-bold">Understand better</p>
                    <p className="text-xl">Our research-backed technique improves comprehension and focus by breaking down long articles, PDFs or videos into smaller parts.</p>
                </div>
                <div className="max-w-imageContainer">
                    <Image className="object-contain rounded-lg" src={featureBreakIntoBlocks} alt="splits articles and videos into small blocks" />
                </div>
            </div>
        </section>
    );
}

export default Features;