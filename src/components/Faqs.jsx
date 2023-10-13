import React, { useState } from "react";
import { faqsData } from "../data/constant";
import FAQ from "../common/FAQ";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function toggleFAQ(index) {
    setActiveIndex(index);
  }

  return (
    <div className="space-y-4">
      {faqsData.map(({ id, question, answer }) => (
        <FAQ
          key={id}
          index={id}
          question={question}
          answer={answer}
          isActive={id === activeIndex}
          toggle={toggleFAQ}
        />
      ))}
    </div>
  );
};

export default Faqs;
