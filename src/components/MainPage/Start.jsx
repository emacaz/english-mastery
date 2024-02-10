import React from "react";
import Button from "./Button";

export default function Start() {
  const getStarted = () => {
    const targetSection = document.getElementById("contact-us_section_id");
    if(targetSection) {
      targetSection.scrollIntoView({behavior: "smooth", block: "start"})
    }
  }

  return (
    <div className="bg-blue-50 px-8">
      <Button button_text={"Quiero empezar!"} onClick={getStarted} />
    </div>
  );
}
