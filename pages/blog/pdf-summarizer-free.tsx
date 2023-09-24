import Head from "next/head";
import Image from "next/image";
import { chromeLogo } from "@/public/assets";

export default function PDFSummarizerFree() {
    return (
      <>
        <Head>
          <title>Free PDF Summarizer with ChatGPT | Best PDF Summarizer Chrome Extension</title>
          <link rel="icon" href='/favicon.png' />
        </Head>
        
        <main className="font-bodyFont overflow-x-hidden overflow-y-scroll px-5">
            <div className="w-full">
                <div className="max-w-contentContainer mx-auto flex gap-4 items-center mt-10">
                    <h1 className="text-4xl font-titleFont font-semibold flex gap-4 mt-10">
                        How to summarize long PDFs for free with ChatGPT?
                    </h1>
                </div>
                <div>
                    <h2 className="text-2xl font-titleFont font-semibold flex gap-4 mt-10 mb-2">TL;DR</h2>
                    <p className=" text-textGrey text-xm">
                        PDF summarization can help you save a lot of time and boost productivity. 
                        Gist AI is a free PDF Summarizer powered by ChatGPT that can summarize PDFs of any length. 
                        Install the free Gist AI Chrome Extension to get started.
                    </p>
                    <div className="mt-6 mb-10">
                        <a href="https://chrome.google.com/webstore/detail/gist-ai/elmpkhkdonhdbkeaigkblbgckcihahoc?utm_source=gist_ai_website" target="__blank">
                        <button className="inline-block w-auto text-xm flex items-center font-titleFont text-textWhite
                         bg-bgRed rounded-md hover:bg-bgRedHover px-2 py-1 mt-2 gap-4">
                            <Image src={chromeLogo} alt="chrome icon" className="h-8 w-8"/>
                            <span>Try PDF Summarization</span>
                        </button>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-titleFont font-semibold flex gap-4 mt-4 mb-2">
                        What is an AI PDF Summarizer?
                    </h2>
                    <p className=" text-textGrey text-xm">
                        An AI PDF Summarizer like Gist AI first reads the content of a PDF and converts it to text format. 
                        After reading this content, it splits the content into small parts using advanced AI technologies. 
                        It then uses ChatGPT to summarize the PDF and identify key points.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-titleFont font-semibold flex gap-4 mt-4 mb-2">
                        Why should you summarize a long PDF?
                    </h2>
                    <ul className=" text-textGrey text-xm">
                        <li>
                            <h3 className="font-semibold text-textBlack text-lg">Saves time</h3>
                            <p className="mb-3">Reading a 100-page PDF could easily take upwards of 50 minutes or more. 
                            However, with Gist AI, you can get a condensed summary that can be read in just a few minutes.
                            </p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-textBlack text-lg">Filter out fluff</h3>
                            <p className="mb-3">You no longer need to read the entire PDF to get to the important parts.
                            With Gist AI, you only read the parts of the PDF which are relevant and important to you.
                            </p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-textBlack text-lg">
                                Unlimited PDF summaries. No restrictions on the length of the PDF
                            </h3>
                            <p className="mb-3">With Gist AI PDF Summarizer, you can summarize unlimited PDFs. 
                            You can summarize lengthy PDFs found online as well as those saved on your device. 
                            There are no limits on the number of PDFs or the length of each PDF.
                            </p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-textBlack text-lg">Easy to use</h3>
                            <p className="mb-3">Gist AI is designed with a simple, intuitive interface. 
                                Just upload your PDF, and Gist AI will instantly summarize it for free. 
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-titleFont font-semibold flex gap-4 mt-4 mb-2">How to summarize a PDF?</h2>
                    <ol className=" text-textGrey text-xm list-decimal list-inside">
                        <li className="p-1">Install the <a className="underline text-textBlue"
                                href="https://www.gistai.tech/?utm_source=gistai&utm_medium=blog&utm_campaign=launch" target="__blank">
                                Gist AI PDF Summarizer Chrome extension</a> from the Chrome Web Store
                        </li>
                        <li className="p-1"><a className="underline text-textBlue" target="__blank"
                            href="https://www.gistai.tech/upload_pdf">Upload</a> your PDF file
                        </li>
                        <p className="p-1">That's it! Gist AI will automatically generate the summary for the PDF.</p>
                        <h3 className="font-semibold text-textBlack text-lg mt-2">Bonus Tip</h3>
                        <p>
                            You can also summarize online PDFs with Gist AI. 
                            Just click on the Gist AI extension icon after opening the PDF file.
                        </p>
                    </ol>
                </div>
                <div>
                    <h2 className="text-2xl font-titleFont font-semibold flex gap-4 mt-4 mb-2">
                        Other tools for PDF Summarization
                    </h2>
                    <p className=" text-textGrey text-xm">While there are other PDF summarization tools powered by ChatGPT, 
                    like ZenoChat and ChatPDF, 
                    none are Free and offer the ease of use and versatility that Gist AI provides. 
                    With Gist AI, you don't have to convert your PDFs to text or break them into sections.
                    Gist AI Chrome extension does all the heavy lifting for you.</p>
                </div>
            </div>
        </main>
      </>
    );
  }