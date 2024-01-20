import React from "react";

export function ContentCard({ contentItem }) {
    return (
        <div className="mb-5 w-full max-w-[400px]">
            <img
                className="m-auto rounded-3xl object-cover h-80 mb-5 border border-gray-500"
                src={contentItem.imgSource}
                alt="content-img"
            />
            <h2 className="text-xl text-center font-semibold mb-3">{contentItem.title}</h2>
            <p className="text-center mb-10 text-base">{contentItem.description}</p>
        </div>
    )
}