import React from "react";

const Button = ({ button_text, onClick }) => {
  return (
    <div className="text-center">
      <button
        className="w-full text-base sm:max-w-[400px] bg-[#545e67] my-4 text-white p-2 rounded-lg sm:text-lg hover:bg-slate-800"
        onClick={onClick}
      >
        {button_text}
      </button>
    </div>
  );
};

export default Button;
