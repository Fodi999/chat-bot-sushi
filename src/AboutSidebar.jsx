import PropTypes from "prop-types";
import { useState } from "react";
import aboutData from "./data/aboutData";

const AboutSidebar = ({ isOpen, toggleAbout }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-[#1e1e1e] transition-transform duration-300 ease-in-out`}
      style={{ width: "100%", maxWidth: "450px" }}
    >
      <div
        className="flex flex-col h-full p-4 overflow-y-scroll
            pt-safe-top pb-safe-bottom
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-800
            [&::-webkit-scrollbar-thumb]:bg-gray-600
            [&::-webkit-scrollbar-thumb]:rounded"
      >
        {/* Кнопка закрытия */}
        <div className="flex justify-end mb-6">
          <button
            className="text-white text-2xl hover:text-gray-400 transition-colors mt-[4px]"
            onClick={toggleAbout}
          >
            <i className="bx bx-arrow-back"></i>
          </button>
        </div>

        {/* Фото и текст об авторе */}
        <div className="text-white space-y-6">
          <div className="flex justify-center">
            <img
              src={aboutData.author.photo}
              alt={aboutData.author.name}
              className="w-[250px] h-[250px] border border-gray-400 object-cover rounded-3xl"
            />
          </div>
          <h2 className="text-2xl font-bold text-center">{aboutData.author.name}</h2>
          <p className="text-center">{aboutData.author.description}</p>
          <p className="text-center">{aboutData.author.additionalInfo}</p>
        </div>

        {/* Аккордеон */}
        <div className="mt-8 space-y-4">
          {aboutData.sections.map((section, index) => (
            <div key={index}>
              <button
                className="w-full bg-[#282828] text-white py-3 px-4 rounded-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{section.title}</span>
                <i
                  className={`bx ${
                    activeAccordion === index ? "bx-chevron-up" : "bx-chevron-down"
                  }`}
                ></i>
              </button>
              {activeAccordion === index && (
                <div className="mt-2 bg-[#383838] p-4 rounded-lg">
                  <p>{section.content}</p>
                  {section.images && (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {section.images.map((imgSrc, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={imgSrc}
                          alt={`Work ${imgIndex + 1}`}
                          className="w-full h-full rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

AboutSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleAbout: PropTypes.func.isRequired,
};

export default AboutSidebar;









