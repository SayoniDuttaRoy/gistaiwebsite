import React from "react";
import SectionTitle from "./SectionTitle";

const PrivacyPolicy = () => {
    return (
        <section id="home" className="max-w-contentContainer mx-auto flex flex-col gap-4 items-center mt-20">
            <SectionTitle title="Privacy Policy"/>
            <div>
                <p className="text-xl text-textGrey">
                Gist AI does not collect any user data. 
                The only information shared with the AI model (chat.openai.com) is the article content in order to generate the summary. <a href="https://www.gistai.tech/privacy_policy" target="__blank" className="underline text-textBlue">More details</a>
                </p>
            </div>
        </section>
    );
};

export default PrivacyPolicy;