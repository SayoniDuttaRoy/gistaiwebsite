import Head from "next/head";
import Image from "next/image";
import { chromeLogo, featurePdf } from "@/public/assets";

export default function PDFSummarizerFree() {
    return (
      <>
        <Head>
            <meta name="author" content="Sayoni Dutta Roy"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>Free PDF Summarizer with ChatGPT | Best AI Summarizer Chrome Extension</title>
            <meta name="keywords" content="Gist AI, pdf summarizer free,ai summarize pdf,
            pdf summarizer chatgpt, ai pdf summarizer, free pdf summarizer, 
            chatgpt summarize pdf, chatgpt pdf summarizer,pdf summarizer ai, 
            summarize pdf ai, ai to summarize pdf,free online pdf summarizer, summarize pdf article,
            ai that can summarize pdf, free pdf summarizer ai, pdf summarizer online free, 
            pdf summarizer ai chrome extension, ai pdf summary, ai to summarize article pdf, 
            pdf summarizer chrome extension" />
            <meta name="description" content="Gist AI is an free online AI PDF summarizer, powered by ChatGPT.
            Summarize unlimited PDF articles of any length.
            Install the Chrome extension and start summarizing.">
            </meta>
            <link rel="icon" href='/favicon.png' />
        </Head>
        
        <main className="font-bodyFont overflow-x-hidden overflow-y-scroll px-5">
            <div className="max-w-contentContainer mx-auto flex flex-col gap-4 items-center mt-10">
                <div className="max-w-contentContainer mx-auto flex gap-4 items-center mt-10">
                    <h1 className="text-4xl font-titleFont font-semibold flex gap-4 mt-10">
                        How to summarize any PDF for free with ChatGPT?
                    </h1>
                </div>
                <div>
                    <h2 className="text-2xl font-titleFont font-semibold flex gap-4 mt-10 mb-2">TL;DR</h2>
                    <p className=" text-textGrey text-xm">
                        PDF summarization can help you save a lot of time and boost productivity. 
                        Gist AI is a free PDF Summarizer powered by ChatGPT. 
                        <br></br>With Gist AI, you can summarize unlimited PDF articles of any length for free.
                    </p>
                    <div className="mt-6 mb-10">
                        <a href="https://chrome.google.com/webstore/detail/gist-aiwebyoutubepdf-summ/elmpkhkdonhdbkeaigkblbgckcihahoc?utm_source=gist_ai_website_pdf" target="__blank">
                        <button className="inline-block w-auto text-xm flex items-center font-titleFont text-textWhite
                         bg-bgRed rounded-md hover:bg-bgRedHover px-2 py-1 mt-2 gap-4">
                            <Image src={chromeLogo} alt="chrome icon" className="h-8 w-8"/>
                            <span>Try PDF Summarizer</span>
                        </button>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-titleFont font-semibold flex gap-4 mb-2">
                        What is an AI PDF Summarizer?
                    </h2>
                    <p className=" text-textGrey text-xm">
                        An AI PDF Summarizer like Gist AI first reads the content of a PDF and converts it to text format. 
                        After reading this content, it splits the content into small parts using advanced AI technologies. 
                        It then uses ChatGPT to summarize the PDF and identify key points.
                    </p>
                    <video controls width="70%" loop className="rounded-lg mt-5 mb-10">
                        <source src="/assets/videos/Demo_PDF_compressed.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <h2 className="text-2xl font-titleFont font-semibold mb-4">
                        Why should you summarize a PDF with Gist AI?
                    </h2>
                    <ul className=" text-textGrey text-xm">
                        <li>
                            <h3 className="font-semibold text-textBlack text-lg">Saves time</h3>
                            <p className="mb-3">Reading a 100-page PDF could easily take upwards of 50 minutes or more. 
                            However, with Gist AI, you can get a condensed summary of any PDF article that can be read in just a few minutes.
                            </p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-textBlack text-lg">Focus on important parts</h3>
                            <p className="mb-3">You no longer need to read the entire PDF to get to the important parts.
                            With Gist AI, you only read the parts of the PDF which are relevant and important to you.
                            </p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-textBlack text-lg">
                                Unlimited Free PDF summaries. No restrictions on the length of the PDF
                            </h3>
                            <p className="mb-3">With Gist AI PDF Summarizer, you can summarize unlimited PDFs. 
                            You can summarize lengthy PDFs found online as well as those saved on your device. 
                            There are no limits on the number of PDFs or the length of each PDF.
                            </p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-textBlack text-lg">Easy to use</h3>
                            <p className="mb-3">Gist AI is designed with a simple, intuitive interface. 
                                Just upload your PDF, and Gist AI will instantly generate the PDF summary. 
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-titleFont font-semibold mb-2">How to summarize a PDF?</h2>
                    <p className=" text-textGrey text-xm">Summarize any PDF in just 2 steps with Gist AI.</p>
                    <div className="mt-5 mb-10 max-w-[70%] ">
                        <Image className="object-contain rounded-lg" src={featurePdf} alt="forward to timestamp in youtube video" />
                    </div>
                    <ol className=" text-textGrey text-xm list-decimal list-inside">
                        <li className="p-1">Install the <a className="underline text-textBlue"
                                href="https://chrome.google.com/webstore/detail/gist-aiwebyoutubepdf-summ/elmpkhkdonhdbkeaigkblbgckcihahoc?utm_source=gist_ai_website_pdf" target="__blank">
                                Gist AI PDF Summarizer Chrome extension</a> from the Chrome Web Store
                        </li>
                        <li className="p-1"><a className="underline text-textBlue" target="__blank"
                            href="https://www.gistai.tech/upload_pdf">Upload</a> your PDF file
                        </li>
                        <p className="p-1">Done! Gist AI will automatically generate the summary for the PDF.</p>
                        <h3 className="font-semibold text-textBlack text-lg mt-2">Bonus Tip</h3>
                        <p>
                            You can also summarize any online PDF with Gist AI. 
                            Just click on the Gist AI extension icon after opening the PDF file to summarize it.
                        </p>
                    </ol>
                </div>
                <div className="mb-10">
                    <h2 className="text-2xl font-titleFont font-semibold flex gap-4 mt-6 mb-2">
                        Other tools for PDF Summarization
                    </h2>
                    <p className=" text-textGrey text-xm">While there are other PDF summarization tools powered by ChatGPT, 
                    like ZenoChat and ChatPDF, 
                    none are Free and offer the ease of use and versatility that Gist AI provides. 
                    With Gist AI, you do not have to convert your PDFs to text or break them into sections.
                    Gist AI Chrome extension does all the heavy lifting for you.</p>
                </div>
            </div>
        </main>
      </>
    );
  }