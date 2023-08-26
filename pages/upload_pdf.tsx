import { rightArrowRed, uploadFileImage } from "@/public/assets";
import Head from "next/head";
import Image from "next/image";

export default function UploadPdf() {
    return (
        <>
          <Head>
            <title>Gist AI - Upload PDF File</title>
            <meta name="title" content="Upload PDF file to summarize it" />
            <meta name="description" content="Upload PDF file to summarize it" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="icon" href='/favicon.png' />
          </Head>
          
          <main className="font-bodyFont overflow-x-hidden overflow-y-scroll px-5">
            <section className="min-h-screen flex items-center justify-center">
                <div className="p-2 bg-white border border-gray-200 rounded-lg shadow mt-3 m-2">
                    <div className="flex flex-row justify-between max-w-imageContainer">
                        <div className="m-[20px]">
                            <p className="text-textRed text-[24px] mb-[10px]">Welcome to Gist AI</p>
                            <p className="text-textBlack text-[20px]">To summarize your local PDF, click on the Upload PDF button to the right.</p>
                        </div>
                        <div className="w-[100px] h-[36px] animate-bounce">
                            <Image className="object-contain rounded-lg" src={rightArrowRed} alt="forward to timestamp in youtube video" />
                        </div>
                    </div>
                    <div className="max-w-imageContainer">
                        <Image className="object-contain rounded-lg" src={uploadFileImage} alt="forward to timestamp in youtube video" />
                    </div>
                </div>
            </section>
          </main>
        </>
      );
}