import React from "react";

const FAQ = ({ index, question, answer, isActive, toggle }) => {
  return (
    <>
      <div>
        <div
          className="bg-secondary rounded-lg py-3 px-2 md:px-5 mb-2 lg:text-lg 2xl:text-xl flex justify-between items-center cursor-pointer"
          onClick={() => toggle(index)}
        >
          <h2 className="">{question}</h2>
          {isActive ? (
            <span className="text-3xl ml-4">-</span>
          ) : (
            <span className="text-3xl ml-1">+</span>
          )}
        </div>
        {isActive && (
          <pre className="font-inter break-words whitespace-pre-wrap">
            <p dangerouslySetInnerHTML={{ __html: answer }} className="text-primary px-5 py-4 bg-slate-200 rounded-lg lg:text-base 2xl:text-lg wow animate__animated animate__fadeIn" />
          </pre>
        )}
      </div>
    </>
  );
};

export default FAQ;
