import React from "react";

interface Props {
    title: string;
}

const SectionTitle = ({title}: Props) => {
    return (
        <h2 className="font-titleFont text-3xl font-semibold flex items-center justify-center">
            <span className="text-textBlack">{title}</span>
        </h2>
    );
};

export default SectionTitle;