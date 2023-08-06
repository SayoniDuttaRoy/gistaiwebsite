import React from "react";
import SectionTitle from "./SectionTitle";

const ContactUs = () => {
    return (
        <section id="home" className="max-w-contentContainer mx-auto flex flex-col gap-4 mt-20">
            <SectionTitle title="Contact Us"/>
            <div>
                <p className="text-xl text-textGrey">
                    We would love to hear from you! Provide feedback, ask questions, request features or report bugs <a
                className="underline text-blue-500" href="https://forms.gle/QCvWzQDoSn31AusA8" target="__blank">here</a>.</p>
            </div>
        </section>
    );
};

export default ContactUs;