import React, { useEffect } from "react";

const HotmartButton = ({ link }) => {
  useEffect(() => {
    const loadHotmart = () => {
      // Check if the script is already loaded
      if (
        !document.querySelector(
          'script[src="https://static.hotmart.com/checkout/widget.min.js"]'
        )
      ) {
        var imported = document.createElement("script");
        imported.src = "https://static.hotmart.com/checkout/widget.min.js";
        document.head.appendChild(imported);
      }

      // Check if the CSS is already loaded
      if (
        !document.querySelector(
          'link[href="https://static.hotmart.com/css/hotmart-fb.min.css"]'
        )
      ) {
        var link = document.createElement("link");
        link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
        document.head.appendChild(link);
      }
    };
    loadHotmart();
  }, []);

  const buyProduct = (e) => {
    e.preventDefault();
  }

  return (
    <a
      className="hotmart-fb block text-center w-full text-base sm:max-w-[400px] bg-[#545e67] my-4 text-white p-2 rounded-lg sm:text-lg hover:bg-slate-800"
      onClick={buyProduct}
      href={link}
    >
      Seleccionar
    </a>
  );
};

export default HotmartButton;
