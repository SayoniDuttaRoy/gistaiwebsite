import React from "react";
import { TfiEmail, TfiLinkedin, TfiInstagram } from "react-icons/tfi";

const SocialIcons = () => {
    return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4">
        <div className="flex flex-col gap-7">
            <a href="mailto:belanik.official@gmail.com" target="__blank">
                <span className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center bg-bgLightPink">
                    <TfiEmail></TfiEmail>
                </span>
            </a>
            <a href="https://www.linkedin.com/in/sayoni-dutta-roy-137187167/" target="__blank">
                <span className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center bg-bgLightPink">
                    <TfiLinkedin></TfiLinkedin>
                </span>
            </a>
            <a href="https://www.instagram.com/gist_ai/" target="__blank">
                <span className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center bg-bgLightPink">
                    <TfiInstagram></TfiInstagram>
                </span>
            </a>
        </div>
        <div className="w-[2px] h-32 bg-textBlack"></div>
    </div>
    );
};

export default SocialIcons;