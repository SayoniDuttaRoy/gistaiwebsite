import React from "react";

const Footer = () => {
    return (
        <section>
            <div className="flex max-w-contentContainer mx-auto justify-between items-baseline align-bottom">
                <div className="flex flex-col gap-2">
                    <p className="text-xl text-gray-600">Creators</p>
                    <p className="text-textGrey underline">
                        <a href="https://www.linkedin.com/in/sayoni-dutta-roy-137187167/" target="__blank">
                            Sayoni Dutta Roy
                        </a>
                    </p>
                    <p className="text-textGrey underline">
                        <a href="https://www.linkedin.com/in/kshitiz10kumar/" target="__blank">
                            Kshitiz Kumar
                        </a>
                    </p>
                </div>
                <p className="text-xl text-gray-600">© 2023 Copyright: Gist AI</p>
                <div className="flex flex-col gap-2 text-textGrey underline">
                    <p>
                        <a href="https://chrome.google.com/webstore/detail/gist-ai-summarize-webyout/elmpkhkdonhdbkeaigkblbgckcihahoc/reviews" target="__blank">
                            Support Us
                        </a>
                    </p>
                    <p>
                        <a href="https://forms.gle/QCvWzQDoSn31AusA8" target="__blank">
                            Contact Us
                        </a>
                    </p>
                    <p>
                        <a href="https://www.gistai.tech/privacy_policy" target="__blank">
                            Privacy
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;