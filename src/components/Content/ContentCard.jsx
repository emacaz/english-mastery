import React from "react";

export function ContentCard({ contentItem }) {
    return (
        <div className="mb-5">
            <img
                className="m-auto rounded-3xl object-cover h-80 mb-5 w-full"
                src={contentItem.imgSource}
                alt="content-img"
            />
            <h2 className="text-2xl text-center font-semibold mb-3">{contentItem.title}</h2>
            <p className="text-center mb-10 text-xl">{contentItem.description}</p>
        </div>
    )
}