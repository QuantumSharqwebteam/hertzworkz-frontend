import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function FaqPage() {
  const Questions = [
    {
      question: "What services does Hertzworkz provide?",
      answer:
        "Hertzworkz offers a wide range of services, including web development, mobile app design, AI/ML solutions, UI/UX design, and custom software development to meet the unique needs of your business.",
    },
    {
      question: "How can Hertzworkz help my business?",
      answer:
        "Hertzworkz collaborates closely with your team to understand your challenges and deliver innovative solutions that drive efficiency, growth, and success.",
    },
    {
      question: "What industries does Hertzworkz work with?",
      answer:
        "We work with industries including technology, healthcare, finance, retail, education, and more, tailoring solutions to specific business needs.",
    },
    {
      question: "How long does it take to complete a project with Hertzworkz?",
      answer:
        "Project timelines depend on the complexity and requirements. However, we provide clear timelines and updates to ensure transparency.",
    },
    {
      question:
        "Do you offer ongoing support and maintenance after the project is completed?",
      answer:
        "Yes, we offer post-project support, maintenance, and updates to ensure your solution remains effective and up-to-date.",
    },
    {
      question: "Can you work with existing design or development frameworks?",
      answer:
        "Absolutely! We can adapt to and work with your existing frameworks to ensure seamless integration.",
    },
    {
      question: "How involved will I be in the project development process?",
      answer:
        "We value collaboration and keep you involved throughout the process, from planning to delivery, ensuring your vision is realized.",
    },
    {
      question: "Can you help with website or app maintenance and updates?",
      answer:
        "Yes, we provide comprehensive maintenance and update services to ensure your platform operates smoothly.",
    },
  ];

  const [visibleAnswers, setVisibleAnswers] = useState(
    Array(Questions.length).fill(false)
  );

  // Toggle visibility of the answer for a given question
  const toggleAnswer = (index) => {
    setVisibleAnswers((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  // FAQ Item Component
  const FaqItem = ({ question, answer, index, isVisible, onClick }) => (
    <div
      data-aos="fade-up"
      className="faq-item border-b border-[#86868B] pb-4 cursor-pointer hover:bg-[#333333] p-2 rounded"
      onClick={onClick}
    >
      <span className="flex items-center">
        <div className="bg-[linear-gradient(180deg,#544E4E,#24242400)]  w-14 h-14 rounded-md flex justify-center items-center text-white font-bold text-lg mr-4">
          {index + 1}
        </div>
        <h3
           
          className={`text-[18px] font-bold ${
            isVisible ? "text-[#22F95B]" : "text-white"
          }`}
        >
          {question}
        </h3>
        <FaPlus className="ms-auto text-white me-8 hover:scale-110 transition-all duration-200 ease-in-out" />
      </span>
      {isVisible && (
        <p  className="text-[16px] text-[#B3B3B3] mt-2">{answer}</p>
      )}
    </div>
  );

  return (
    <section className="FAQ_Page p-4 bg-black max-w-screen max-w-full overflow-x-hidden overflow-y-hidden">
      <div className="Content border-2 border-[#86868B]">
        {/* Header */}
        <div data-aos="fade-up"  className="Heading p-4 h-[260px] flex flex-col justify-center items-center border-[#86868B] border-b-2 text-white">
          <h1 className="text-[35px] mb-2">Frequently Asked Questions</h1>
          <p className="text-[18px]">
            Still have questions? Contact our team at
            <span className="text-[#22F95B] ml-1">hertzworkspvt@gmail.com</span>
          </p>
        </div>

        {/* FAQ Section */}
        <div className="BottomContent grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Left Column */}
          <div className="space-y-6">
            {Questions.slice(0, 4).map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
                isVisible={visibleAnswers[index]}
                onClick={() => toggleAnswer(index)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {Questions.slice(4).map((item, index) => (
              <FaqItem
                key={index + 4}
                question={item.question}
                answer={item.answer}
                index={index + 4}
                isVisible={visibleAnswers[index + 4]}
                onClick={() => toggleAnswer(index + 4)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqPage;
