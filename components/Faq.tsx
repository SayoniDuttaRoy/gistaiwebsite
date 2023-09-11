import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { downTriangleRed, rightTriangleRed } from "@/public/assets";

const faqs = [
    {question: 'What makes your AI summarizer different from others?', answer: 'Unlike other extensions, Gist AI can summarize everything - websites, YouTube videos and PDFs. It is free and there is no restriction on the length of the content. With Gist AI, you can also read more details about the summary source or jump right to specific moments in a YouTube video. It improves understanding by splitting long content into smaller blocks.'},
    {question: 'How does the AI PDF summarizer work?', answer: 'Gist AI can summarize an online PDF as well as any PDF stored on your device using ChatGPT AI. To summarize any PDF, just click on the Gist AI extension icon. If it is a PDF stored on your device, you need to upload it for summarization.'},
    {question: 'How can I use your tool to summarize websites or YouTube videos?', answer: 'To summarize websites or YouTube videos, click on the Gist AI extension icon from the toolbar.'},
    {question: 'Is there a free version of the summarizer available?', answer: 'Gist AI is a completely free AI summarizer. It can summarize any website, YouTube video, online PDF as well as any PDF stored on your device.'},
    {question: 'Is there a feature to summarize books, research articles or longer documents?', answer: 'Gist AI imposes no limit on the length of the content that it can summarize. So you can summarize long books, research articles and documents with Gist AI.'},
    {question: 'Can the Chrome extension summarize articles from any website?', answer: 'Gist AI is a Chrome extension that can summarize articles from all websites for free.'},
    {question: 'Is the summary generator safe to use?', answer: 'Gist AI respects the user privacy and does not collect any user data. It only reads the content for summarization and does not store this content. So it is completely safe to use.'},
    {question: 'Can ChatGPT summarize YouTube videos?', answer: 'ChatGPT cannot directly summarize YouTube videos because it can only process text. So Gist AI extracts the transcript from the YouTube video and then uses ChatGPT to summarize it.'},
    {question: 'How does the AI-powered PDF summarizer enhance the summarization process?', answer: 'An AI-powered PDF summarizer uses advanced algorithms to quickly identify and extract the most important information from a PDF. This makes the summarization process faster and more accurate than manual methods.'},
    {question: 'How does your summarizer ensure content is not plagiarized?', answer: 'Gist AI uses ChatGPT, which understands the content, to create summaries. ChatGPT aims to produce original summaries but it is important to cross-check for potential similarities with the original content.'}
];

interface QuestionProps {
    question: string;
    answer: string;
}

const Question = ({question, answer}: QuestionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-xl mb-[15px]">
            <div className="cursor-pointer flex flex-row items-center"
            onClick={() => setIsOpen(!isOpen)}>
                <Image src={isOpen ? downTriangleRed : rightTriangleRed} alt={"dropdown arrow"} 
                    className="h-[16px] w-[16px]"/>
                <p className="ml-[10px]">{question}</p>
            </div>
            <div className={`mt-[10px] ml-[26px] text-textGrey ${isOpen ? 'block' : 'hidden'}`}>
                {answer}
            </div>
        </div>
    );
}

const Faq = () => {
    return (
        <section id="faq" className="max-w-containerSmall max-auto py-10 flex flex-col gap-8 mt-10">
            <SectionTitle title="Frequently asked questions" />
            <div>
                {faqs.map((element, index) => (
                <div key={index}>
                    <Question question={element.question} answer={element.answer} />
                </div>
                ))}
            </div>
        </section>
    );
}

export default Faq;