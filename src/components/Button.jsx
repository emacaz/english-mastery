import React from "react";

const Button = ({ button_text }) => {
    return (
        <div className="text-center my-7">
            <button className="bg-slate-600 text-white p-2 rounded-lg w-60 text-lg hover:bg-slate-800">{button_text}</button>
        </div>
    )
};

export default Button;