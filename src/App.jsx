import { useState } from "react";
import Sidebar from "./Sidebar";
import AboutSidebar from "./AboutSidebar";
import { useChatLogic } from "./components/ChatLogic";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const {
    messages,
    input,
    handleSendMessage,
    handleInputChange,
  } = useChatLogic();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  return (
    <div className="flex flex-col h-screen bg-[#282828] text-white py-4">
      <header className="bg-[#282828] text-white py-4 px-6 pt-safe-top">
        <button
          onClick={toggleAbout}
          className="flex items-center space-x-4 bg-[#383838] text-white hover:shadow-lg rounded-lg p-2 transition-all duration-200 min-h-[44px] min-w-[44px]"
        >
          <div className="w-12 h-12 rounded-full border border-gray-400 overflow-hidden">
            <img
              src="/feis 1.png"
              alt="Author Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold">Master Sushi</span>
        </button>
      </header>

      <main className="relative flex-1 overflow-y-auto p-4 space-y-4 max-w-lg mx-auto w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="bx bxl-slack text-[100px] text-white opacity-30"></i>
        </div>

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-start`}
          >
            {msg.sender === "bot" && (
              <div className="flex items-center text-red-500 mr-2">
                <i className="bx bxl-slack text-2xl"></i>
              </div>
            )}
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.sender === "user"
                  ? "bg-[#4a4a4a] text-white"
                  : "bg-[#383838] text-gray-300"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </main>

      <footer className="bg-[#282828] p-4 pb-safe-bottom">
        <div className="flex items-center space-x-2 max-w-lg mx-auto w-full">
          <div className="relative flex items-start w-full bg-[#383838] border border-[#4a4a4a] rounded-lg p-2">
            <button
              className="absolute inset-y-0 left-2 flex items-center text-red-500 text-2xl min-h-[44px] min-w-[44px]"
              onClick={toggleSidebar}
            >
              <i className="bx bx-food-menu"></i>
            </button>
            <textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Введите сообщение..."
              rows="1"
              className="flex-1 resize-none bg-transparent text-white text-sm px-12 py-1 focus:outline-none"
            ></textarea>
            <button
              onClick={handleSendMessage}
              className="absolute inset-y-0 right-2 flex items-center text-white text-2xl min-h-[44px] min-w-[44px]"
            >
              <i className="bx bx-down-arrow-circle bx-flip-vertical"></i>
            </button>
          </div>
        </div>
      </footer>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <AboutSidebar isOpen={isAboutOpen} toggleAbout={toggleAbout} />
    </div>
  );
}

export default App;












