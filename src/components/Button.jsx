import React from "react";

const Button = ({ button_text }) => {
    return (
        <div className="text-center">
            <button className="bg-[#545e67] my-4 text-white p-2 rounded-lg text-xl hover:bg-slate-800 w-full">{button_text}</button>
        </div>
    )
};

export default Button;