import React from "react";

export function ContentCard({ contentItem }) {
    return (
        <>
            <img src={contentItem.imgSource} alt="content-img" />
            <h2>{contentItem.title}</h2>
            <p>{contentItem.description}</p>
        </>
    )
}