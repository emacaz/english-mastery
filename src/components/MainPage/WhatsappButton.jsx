import React from "react";
import WhatsAppIcon from "../images/whatsapp-logo.png"; // Adjust the path based on your file structure

export default function WhatsAppButton() {
  return (
    <a
    href="https://api.whatsapp.com/send?phone=573224504439&text=Hello!%20%F0%9F%91%8B%20Quiero%20tomar%20el%20programa%20English%20Mastery."
      className="fixed bottom-4 right-4 sm:bottom-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center z-50"
      target="_blank"
      rel="noopener noreferrer"
      style={{ gap: "8px" }}
    >
      <img src={WhatsAppIcon} alt="WhatsApp" style={{ width: "24px" }} />
      Escríbenos
    </a>
  );
}
