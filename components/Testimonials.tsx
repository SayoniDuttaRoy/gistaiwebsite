import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { starRating } from "@/public/assets";

const Testimonials = () => {
    return (
        <section id="testimonials" className="max-w-containerSmall max-auto py-10 flex flex-col gap-10 mt-10">
            <SectionTitle title="Customer Testimonials" />
            <div>
            <div>  
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                        <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                            <div className="h-full flex flex-col justify-center space-y-2">
                                <Image className="w-24 h-24 mx-auto rounded-full" src={starRating} alt="user avatar" height="220" width="220" loading="lazy" />
                                <p className="text-gray-600 md:text-xl">
                                    It is a great tool for students and professionals alike and the software understands exactly what points and figures in the article would be useful for the reader very well. There have been many times when I needed to comb through huge articles to find the most important points for a business report or a presentation and GistAI does just that in a matter of seconds.
                                </p>
                            <div>
                                <h6 className="text-lg font-semibold leading-none mb-3">Sambuddha Guha</h6>
                                <span className="text-xm text-gray-500">Business Analyst</span>
                            </div>
                        </div>
                    </div>
                <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                    <Image className="w-24 h-24 mx-auto rounded-full" src={starRating} alt="user avatar" height="220" width="220" loading="lazy" />
                    <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                        <p className="text-gray-600">
                            As someone who rarely has any patience to read on pages and pages of any article, this extension is  a life saver for me. This extension streamlined the contents of the articles with a great deal of precision for me. As a student I do have to read quite a few tech related articles and this extension just made my day to day work way more easier.
                        </p>
                    <div>
                        <h6 className="text-lg font-semibold leading-none mb-3">Sunny Basu</h6>
                        <span className="text-xm text-gray-500">Research Student</span>
                    </div>
                </div>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <Image className="w-24 h-24 mx-auto rounded-full" src={starRating} alt="user avatar" height="220" width="220" loading="lazy" />
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                    <p className="text-gray-600">
                      With all the content that we consume on a daily basis this extension is a life- and timesaver. Would highly recommend for anyone to give this a try.
                    </p>
                <div>
                <h6 className="text-lg font-semibold leading-none mb-3">Joris Langewouters</h6>
                <span className="text-xm text-gray-500">Consultant</span>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
    </div>
    <div className="text-center">
        <a href="https://chrome.google.com/webstore/detail/gist-ai/elmpkhkdonhdbkeaigkblbgckcihahoc?utm_source=gist_ai_website" target="__blank" className="underline text-blue-500">
            View More
        </a>
    </div>
    </section>
    );
};

export default Testimonials;
