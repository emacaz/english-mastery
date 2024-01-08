import React from "react";

export function ContentCard({ contentItem }) {
    return (
        <div>
            <img
                className="m-auto rounded-3xl object-cover h-80 mb-5 w-full"
                src={contentItem.imgSource}
                alt="content-img"
            />
            <h2 className="text-2xl text-center font-semibold mb-3">{contentItem.title}</h2>
            <p className="text-center">{contentItem.description}</p>
        </div>
    )
}