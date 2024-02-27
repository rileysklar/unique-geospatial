import React, { useState } from "react";
import "../styles/accordion.css";

const faqs = [
  {
    title: "What technologies do I specialize in as a developer?",
    text: "I specialize in a broad array of technologies including JavaScript, React, Node.js, and UI/UX design, with a focus on creating dynamic, full-stack solutions.",
  },
  {
    title:
      "How do I ensure my web development projects meet client expectations?",
    text: "I prioritize meticulous attention to detail and a commitment to excellence, tailoring each project to exceed client expectations through innovative solutions.",
  },
  {
    title:
      "What is an example of how I've integrated UI/UX design into my projects?",
    text: "I redesigned the mobile experience for an Apple UI/UX project, focusing on intuitive navigation and aesthetic appeal to significantly enhance user engagement.",
  },
  {
    title: "How do I stay updated with the latest technology trends?",
    text: "I continuously engage in self-improvement and learning, adopting the latest technologies to keep my skill set current and relevant.",
  },
  {
    title: "What is my approach to problem-solving in development projects?",
    text: "I approach problem-solving with a blend of creativity and analytical thinking, leveraging my comprehensive skill set to find efficient and innovative solutions.",
  },
];

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
    console.log("Clicked!");
  }

  return (
    <div
      className={`accordion-item ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      {" "}
      <div className="top-row">
        <p className="accordion-number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="accordion-title">{title}</p>
        <p className="accordion-icon">{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          title={item.title}
          text={item.text}
          num={i}
          key={item.title}
        />
      ))}
    </div>
  );
}
