import SectionTitle from "@/components/SectionTitle";
import { howToUseGist, upRightArrow } from "@/public/assets";
import Head from "next/head";
import Image from "next/image";

export default function Welcome() {
    return (
      <>
        <Head>
          <title>Welcome to Gist AI</title>
          <meta name="title" content="Welcome to Gist AI - A ChatGPT powered free Chrome Extension for summarizing webpages and Youtube Videos" />
          <meta name="description" content="Landing page for Gist AI - A ChatGPT powered free Chrome Extension for summarizing webpages and Youtube Videos. Works on all sites." />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="icon" href='/favicon.png' />
        </Head>
        
        <main className="font-bodyFont overflow-x-hidden overflow-y-scroll px-5">
            <section id="home" className="max-w-contentContainer mx-auto flex flex-col gap-4 items-center mt-10">
                <h1 className="text-4xl font-titleFont font-semibold flex gap-4 mt-10">
                    Welcome to <span className="text-textRed">Gist</span> AI
                </h1>
                <p className="text-2xl text-textGrey text-center font-medium max-w-[650px] mt-5">Summarize any webpage or Youtube video in 1 click using ChatGPT AI
                <br/>Even better, read more details about the summary or skip right to that moment in the Youtube video.
                </p>
                <a href="https://education.nationalgeographic.org/resource/renewable-energy-explained/" target="__blank">
                    <button className="inline-block w-auto text-2xl flex items-center font-titleFont text-textWhite bg-bgRed rounded-md hover:bg-bgRedHover px-4 py-3 mt-4">
                        <span>Try it Now</span>
                        <Image src={upRightArrow} alt="up right arrow icon" className="h-4 w-4 filter brightness-0 invert ml-3"></Image>
                    </button>
                </a>
                <div className="border-t border-gray-200 m-4 w-[650px]"></div>
                <div className="max-w-containerSmall max-auto py-10 flex flex-col gap-8">
                    <SectionTitle title="How to Use Gist AI" />
                    <ol className="list-decimal list-inside text-xl">
                        <li className="p-1">Pin the Gist AI extension to your toolbar</li>
                        <li className="p-1">When you visit a webpage, click the Gist AI icon to summarize it</li>
                    </ol>
                    <Image src={howToUseGist} alt="How to use gist" className="rounded-lg"></Image>
                </div>
            </section>
        </main>
      </>
    );
  }