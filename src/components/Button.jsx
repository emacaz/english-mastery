import React from "react";

const Button = ({ button_text }) => {
    return (
        <div className="text-center py-[2rem]">
            <button className="bg-slate-600 text-white p-2 rounded-lg text-lg hover:bg-slate-800 w-full">{button_text}</button>
        </div>
    )
};

export default Button;