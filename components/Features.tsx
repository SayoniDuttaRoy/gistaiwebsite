import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { extractKeyPoints } from "@/public/assets";

const Features = () => {
    return (
        <section id="features" className="max-w-containerSmall max-auto py-10 flex flex-col gap-10 mt-10">
            <SectionTitle title="Main Features" />
            {/* Feature 1 */}
            <div className="w-full flex items-center justify-center gap-10 flex-wrap mdl:flex-nowrap">
                <div className="w-full flex flex-col gap-6 lgl:justify-between items-begin">
                    <p className="font-titleFont text-textRed text-2xl font-bold">Save time</p>
                    <p className="text-xl">Instantly extract key points from long articles or Youtube videos in 1 click.</p>
                </div>
                <div className="max-w-imageContainer">
                    <Image className="object-contain" src={extractKeyPoints} alt="extract key point image" />
                </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full flex items-center justify-center gap-10 flex-wrap mdl:flex-nowrap mt-20">
                <div className="w-full flex flex-col gap-6 lgl:justify-between items-begin">
                    <p className="font-titleFont text-textRed text-2xl font-bold">Deep dive into what you like</p>
                    <p className="text-xl">Use our Read More to deep dive into the interesting parts of any article. <br />
                    Or jump straight to that section in any Youtube Video.</p>
                </div>
                <div className="max-w-imageContainer">
                    <Image className="object-contain" src={extractKeyPoints} alt="extract key point image" />
                </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full flex items-center justify-center gap-10 flex-wrap mdl:flex-nowrap mt-20">
                <div className="w-full flex flex-col gap-6 lgl:justify-between items-begin">
                    <p className="font-titleFont text-textRed text-2xl font-bold">Understand better</p>
                    <p className="text-xl">Our research backed techniques improve comprehension by breaking down long articles into smaller parts.</p>
                </div>
                <div className="max-w-imageContainer">
                    <Image className="object-contain" src={extractKeyPoints} alt="extract key point image" />
                </div>
            </div>
        </section>
    );
}

export default Features;