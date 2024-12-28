import { useState } from "react";
import Sidebar from "./Sidebar"; // Импортируем Sidebar
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Привет! Я ваш помощник Chat Bot Sushi. Чем могу помочь?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Ваш запрос обрабатывается..." },
      ]);
      setInput("");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    e.target.style.height = "auto"; // Сброс высоты
    e.target.style.height = `${e.target.scrollHeight}px`; // Установка новой высоты
  };

  return (
    <div className="flex flex-col h-screen bg-[#282828] text-white">
      {/* Заголовок */}
      <header className="bg-[#1e1e1e] text-white text-center py-4">
        <h1 className="text-xl font-bold">Chat Bot Sushi</h1>
      </header>

      {/* Область чата */}
      <main className="relative flex-1 overflow-y-auto p-4 space-y-4 max-w-lg mx-auto w-full">
        {/* Иконка в центре */}
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="bx bxl-slack text-[100px] text-white opacity-30"></i>
        </div>

        {/* Сообщения */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-start`}
          >
            {/* Иконка бота */}
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

      {/* Поле ввода */}
      <footer className="bg-[#1e1e1e] p-4">
        <div className="flex items-center space-x-2 max-w-lg mx-auto w-full">
          <div className="relative flex items-start w-full bg-[#383838] border border-[#4a4a4a] rounded-lg p-2">
            {/* Иконка меню */}
            <button
              className="absolute bottom-2 left-2 text-white text-xl"
              onClick={toggleSidebar}
            >
              <i className="bx bx-food-menu"></i>
            </button>

            {/* Текстовое поле */}
            <textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Введите сообщение..."
              rows="1"
              className="flex-1 resize-none bg-transparent text-white text-sm px-8 py-1 focus:outline-none"
            ></textarea>

            {/* Кнопка отправки */}
            <button
              onClick={handleSendMessage}
              className="absolute bottom-2 right-2 text-white text-xl"
            >
              <i className="bx bx-down-arrow-circle"></i>
            </button>
          </div>
        </div>
      </footer>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;






