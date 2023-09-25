import Head from "next/head";
import Image from "next/image";
import { chromeLogo, featureJumpToYtTime } from "@/public/assets";

export default function YoutubeSummarizerFree() {
    return (
        <>
            <Head>
                <meta name="author" content="Sayoni Dutta Roy"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Free YouTube Summarizer with ChatGPT | Best AI Summarizer Chrome Extension</title>
                <meta name="keywords" content="Gist AI, youtube summarizer free,ai summarize youtube,
            youtube summarizer chatgpt, ai youtube summarizer, free youtube summarizer,
            chatgpt summarize youtube, chatgpt youtube summarizer,youtube summarizer ai,
            summarize youtube ai, ai to summarize youtube,free online youtube summarizer, summarize youtube,
            ai that can summarize youtube, free youtube summarizer ai, youtube summarizer online free,
            youtube summarizer ai chrome extension, ai youtube summary, ai to summarize article youtube,
            youtube summarizer chrome extension" />
                <meta name="description" content="Gist AI is an free online AI YouTube summarizer, powered by ChatGPT.
            Summarize unlimited Youtube videos of any length.
            Install the Chrome extension and start summarizing.">
                </meta>
                <link rel="icon" href='/favicon.png' />
            </Head>

            <main className="font-bodyFont overflow-x-hidden overflow-y-scroll px-5">
                <div className="max-w-contentContainer mx-auto flex flex-col gap-4 mt-10">
                    <div className="mx-auto flex gap-4 items-center mt-10">
                        <h1 className="text-4xl font-titleFont font-semibold flex gap-4 mt-10">
                            How to summarize any YouTube video for free using AI?
                        </h1>
                    </div>
                    <div>
                        <h2 className="text-2xl font-titleFont font-semibold flex gap-4 mt-10 mb-2">TL;DR</h2>
                        <p className=" text-textGrey text-xm">
                            Youtube summarization can help you save a lot of time and boost productivity.
                            Gist AI is a free ai based Youtube Summarizer powered by ChatGPT.
                        </p>
                        <p className=" text-textGrey text-xm">
                            With Gist AI, you can summarize unlimited Youtube videos of any length for free.
                        </p>
                        <div className="mt-6 mb-10">
                            <a href="https://chrome.google.com/webstore/detail/gist-aiwebyoutubepdf-summ/elmpkhkdonhdbkeaigkblbgckcihahoc?utm_source=gist_ai_website_pdf" target="__blank">
                                <button className="inline-block w-auto text-xm flex items-center font-titleFont text-textWhite
                         bg-bgRed rounded-md hover:bg-bgRedHover px-2 py-1 mt-2 gap-4">
                                    <Image src={chromeLogo} alt="chrome icon" className="h-8 w-8"/>
                                    <span>Try Youtube Summarizer</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-titleFont font-semibold flex gap-4 mb-2">
                            What is an AI Youtube Summarizer?
                        </h2>
                        <p className=" text-textGrey text-xm">
                            An AI Youtube Summarizer like Gist AI first gets the content of a Youtube video and converts it to text format.
                            After reading this content, it splits the content into small parts using advanced AI technologies.
                            It then uses ChatGPT to summarize the video and identify key points.
                        </p>
                        <video controls width="70%" loop className="rounded-lg mt-5 mb-10">
                            <source src="/assets/videos/Demo_Youtube_compressed.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <h2 className="text-2xl font-titleFont font-semibold mb-4">
                            Why should you summarize a Youtube video with Gist AI?
                        </h2>
                        <ul className=" text-textGrey text-xm">
                            <li>
                                <h3 className="font-semibold text-textBlack text-lg">Saves time</h3>
                                <p className="mb-3">Watching a 1 hour long video would be very overwhelming.
                                    However, with Gist AI, you can get a condensed summary of any Youtube video that can be completed in just a few minutes.
                                </p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-textBlack text-lg">Focus on important parts</h3>
                                <p className="mb-3">You no longer need to watch the entire video to get to the important parts.
                                    With Gist AI, you only watch the parts of the Video which are relevant and important to you.
                                </p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-textBlack text-lg">
                                    Unlimited Free Youtube video summaries. No restrictions on the length of the Video.
                                </h3>
                                <p className="mb-3">With Gist AI Youtube Summarizer, you can summarize unlimited Youtube Videos.
                                    You can summarize very long Youtube videos.
                                    There are no limits on the number of videos or the length of each video.
                                </p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-textBlack text-lg">Easy to use</h3>
                                <p className="mb-3">Gist AI is designed with a simple, intuitive interface.
                                    Just click on the GistAI icon, and Gist AI will instantly generate the Youtube video summary.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-titleFont font-semibold mb-2">How to summarize a Youtube Video?</h2>
                        <p className=" text-textGrey text-xm">Summarize any Youtube video in just 3 steps with Gist AI.</p>
                        <div className="mt-5 mb-10 max-w-[70%] ">
                            <Image className="object-contain rounded-lg" src={featureJumpToYtTime} alt="forward to timestamp in youtube video" />
                        </div>
                        <ol className=" text-textGrey text-xm list-decimal list-inside">
                            <li className="p-1">Install the <a className="underline text-textBlue"
                                                               href="https://chrome.google.com/webstore/detail/gist-aiwebyoutubepdf-summ/elmpkhkdonhdbkeaigkblbgckcihahoc?utm_source=gist_ai_website_youtube" target="__blank">
                                Gist AI Youtube Summarizer Chrome extension</a> from the Chrome Web Store
                            </li>
                            <li className="p-1">Open this example <a className="underline text-textBlue" target="__blank"
                                                                     href="https://www.youtube.com/watch?v=B5tU2447OK8">Youtube video</a>
                            </li>
                            <li className="p-1"> Click on the GistAI chrome extension icon.
                            </li>
                            <p className="p-1">Done! Gist AI will automatically generate the summary for the Youtube Video.</p>
                        </ol>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-2xl font-titleFont font-semibold flex gap-4 mt-6 mb-2">
                            Other tools for Youtube Video Summary
                        </h2>
                        <p className=" text-textGrey text-xm">While there are other Youtube summarization tools powered by ChatGPT,
                            like Eightify and YouTube Summarized,
                            none are Free and offer the ease of use and versatility that Gist AI provides.
                            With Gist AI, you do not have to convert your Youtube video to text or break them into sections.
                            Gist AI Chrome extension does all the heavy lifting for you.</p>
                    </div>
                </div>
            </main>
        </>
    );
}
