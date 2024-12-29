import { useState, useEffect } from "react";
import responses from "./responses.json"; // Импортируем JSON с ответами

export function useChatLogic() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Функция для определения времени суток и выбора приветствия
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return responses.greeting_morning;
    } else if (currentHour < 18) {
      return responses.greeting_afternoon;
    } else {
      return responses.greeting_evening;
    }
  };

  useEffect(() => {
    // Устанавливаем приветственное сообщение при загрузке
    const greeting = getGreeting();
    setMessages([{ sender: "bot", text: greeting }]);
  }, []);

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Поиск подходящего ответа из JSON
    if (lowerMessage.includes("привет")) {
      return responses.hello;
    } else if (lowerMessage.includes("как дела")) {
      return responses.how_are_you;
    } else if (lowerMessage.includes("меню")) {
      return responses.menu;
    } else if (lowerMessage.includes("доставка")) {
      return responses.delivery;
    } else if (lowerMessage.includes("цены")) {
      return responses.prices;
    } else if (lowerMessage.includes("спасибо")) {
      return responses.thank_you;
    } else {
      return responses.default;
    }
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = input.trim();

      // Добавляем сообщение пользователя
      setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

      // Генерируем ответ бота
      const botResponse = getBotResponse(userMessage);

      // Добавляем сообщение бота
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);

      setInput(""); // Очищаем ввод
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return {
    messages,
    input,
    handleSendMessage,
    handleInputChange,
  };
}


