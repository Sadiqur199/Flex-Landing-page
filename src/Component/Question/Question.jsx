import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Question = () => {
  const [question, setQuestions] = useState([
    { id: 1, isContentVisible: false },
    { id: 2, isContentVisible: false },
    { id: 3, isContentVisible: false },
    { id: 4, isContentVisible: false },
    { id: 5, isContentVisible: false },
    { id: 6, isContentVisible: false },
  ]);

  const toggleContent = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, isContentVisible: !question.isContentVisible }
          : question
      )
    );
  };

  return (
    <div className="bg-[#0052CC]">
      <div className="text-center pt-[70px] text-white">
        <p>Common Question </p>
        <h3 className="text-2xl font-bold">Frequently asked questions</h3>
      </div>

      <div className="">
        <div className="pb-10">
          <div className="md:flex md:flex-wrap md:mx-[50px] mt-[50px] md:justify-between">
            <div>
              <div
                key={question[0].id}
                className="flex justify-between mt-8 bg-white p-5 rounded md:w-[500px]"
              >
                <div>
                  <h1
                    className={`font-bold  text-[#010101]${
                      question[0].isContentVisible ? "text-black" : "text-black"
                    }`}
                  >
                    What kind of data can I see in FieldX?{" "}
                  </h1>
                  {question[0].isContentVisible && (
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </p>
                  )}
                </div>
                <div
                  style={{
                    marginLeft: question[0].isContentVisible ? "0px" : "200px",
                    marginRight: question[0].isContentVisible ? "60px" : "0px",
                  }}
                >
                  <button onClick={() => toggleContent(question[0].id)}>
                    {question[0].isContentVisible ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </button>
                </div>
              </div>

              {/* second Question */}
              <div
                key={question[1].id}
                className="flex justify-between mt-8 bg-white p-5 rounded md:w-[500px]"
              >
                <div>
                  <h1
                    className={`font-bold text-[#010101]  ${
                      question[1].isContentVisible ? "text-black" : "text-black"
                    }`}
                  >
                    Does Bizzy read my customers' data?{" "}
                  </h1>
                  {question[1].isContentVisible && (
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </p>
                  )}
                </div>
                <div
                  style={{
                    marginLeft: question[1].isContentVisible ? "0px" : "170px",
                    marginRight: question[1].isContentVisible ? "60px" : "0px",
                  }}
                >
                  <button onClick={() => toggleContent(question[1].id)}>
                    {question[1].isContentVisible ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              {/* Third Question */}
              <div
                key={question[2].id}
                className="flex justify-between mt-8 bg-white p-5 rounded md:w-[500px]"
              >
                <div>
                  <h1
                    className={`font-bold text-[#010101] ${
                      question[2].isContentVisible ? "text-black" : "text-black"
                    }`}
                  >
                    What's your refund and cancellation policy?{" "}
                  </h1>
                  {question[2].isContentVisible && (
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </p>
                  )}
                </div>
                <div
                  style={{
                    marginLeft: question[2].isContentVisible ? "0px" : "170px",
                    marginRight: question[2].isContentVisible ? "60px" : "0px",
                  }}
                >
                  <button onClick={() => toggleContent(question[2].id)}>
                    {question[2].isContentVisible ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </button>
                </div>
              </div>

              {/* Fourth Question */}
              <div
                key={question[3].id}
                className="flex justify-between mt-8 bg-white p-5 rounded md:w-[500px]"
              >
                <div>
                  <h1
                    className={`font-bold  text-[#010101] ${
                      question[3].isContentVisible ? "text-black" : "text-black"
                    }`}
                  >
                    How do you take payments?{" "}
                  </h1>
                  {question[3].isContentVisible && (
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </p>
                  )}
                </div>
                <div
                  style={{
                    marginLeft: question[3].isContentVisible ? "0px" : "170px",
                    marginRight: question[3].isContentVisible ? "60px" : "0px",
                  }}
                >
                  <button onClick={() => toggleContent(question[3].id)}>
                    {question[3].isContentVisible ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </button>
                </div>
              </div>
            </div>
            {/* fifth question */}
            <div>
              <div
                key={question[4].id}
                className="flex justify-between mt-8 bg-white p-5 rounded md:w-[500px]"
              >
                <div>
                  <h1
                    className={`font-bold  text-[#010101] ${
                      question[4].isContentVisible ? "text-black" : "text-black"
                    }`}
                  >
                    Can I also track website analytics on fieldX?{" "}
                  </h1>
                  {question[4].isContentVisible && (
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </p>
                  )}
                </div>
                <div
                  style={{
                    marginLeft: question[4].isContentVisible ? "0px" : "170px",
                    marginRight: question[4].isContentVisible ? "60px" : "0px",
                  }}
                >
                  <button onClick={() => toggleContent(question[4].id)}>
                    {question[4].isContentVisible ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </button>
                </div>
              </div>
            </div>
            {/* six question */}
            <div>
              <div
                key={question[5].id}
                className="flex justify-between mt-8 bg-white p-5 rounded md:w-[500px]"
              >
                <div>
                  <h1
                    className={`font-bold  text-[#010101] ${
                      question[5].isContentVisible ? "text-black" : "text-black"
                    }`}
                  >
                    What makes Bizzy different from other analytics tools?{" "}
                  </h1>
                  {question[5].isContentVisible && (
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </p>
                  )}
                </div>
                <div
                  style={{
                    marginLeft: question[5].isContentVisible ? "0px" : "170px",
                    marginRight: question[5].isContentVisible ? "60px" : "0px",
                  }}
                >
                  <button onClick={() => toggleContent(question[5].id)}>
                    {question[3].isContentVisible ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
