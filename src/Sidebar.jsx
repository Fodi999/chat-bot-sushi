// src/Sidebar.jsx
import PropTypes from "prop-types";
import { useState } from "react";
import categories from "./data/dishes"; // Импортируем данные
import Card from "./components/Card"; // Импортируем компонент карточки
import Cart from "./Cart"; // Импортируем компонент корзины

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isCartOpen, setIsCartOpen] = useState(false); // Состояние для открытия корзины
  const [cartItems, setCartItems] = useState([]); // Состояние для содержимого корзины

  const handleBuy = (dish) => {
    // Проверяем, есть ли уже этот товар в корзине
    const exists = cartItems.some((item) => item.id === dish.id);
    if (!exists) {
      setCartItems((prevItems) => [...prevItems, { ...dish, quantity: 1 }]);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Открываем/закрываем корзину
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Удаляем товар по id
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#1e1e1e] transition-transform duration-300 ease-in-out`}
        style={{ width: "100%" }}
      >
        <div
          className="flex flex-col h-full pt-safe-top pb-safe-bottom p-4 overflow-y-scroll
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-800
            [&::-webkit-scrollbar-thumb]:bg-gray-600
            [&::-webkit-scrollbar-thumb]:rounded"
        >
          {/* Верхний ряд кнопок */}
          <div className="flex justify-between items-center mb-6">
            {/* Кнопка корзины */}
            <button
              className={`flex items-center justify-center text-white text-2xl p-2 rounded-full shadow-lg border ${
                cartItems.length > 0
                  ? "bg-red-500 hover:bg-red-600 border-red-600"
                  : "bg-gray-700 hover:bg-gray-600 border-gray-300"
              }`}
              onClick={toggleCart}
            >
              <i className="bx bx-cart"></i>
            </button>
            {/* Кнопка закрытия меню */}
            <button
              className="text-white text-2xl hover:text-gray-400 transition-colors"
              onClick={toggleSidebar}
            >
              <i className="bx bx-arrow-back"></i>
            </button>
          </div>

          {/* Список категорий */}
          {categories.map((category, index) => (
            <div key={`category-${index}`} className="mb-6">
              <h2 className="text-lg font-bold text-white mb-4">{category.title}</h2>
              <div
                className="flex overflow-x-auto space-x-4 pb-4
                  [&::-webkit-scrollbar]:h-2
                  [&::-webkit-scrollbar-track]:bg-gray-800
                  [&::-webkit-scrollbar-thumb]:bg-gray-600
                  [&::-webkit-scrollbar-thumb]:rounded"
              >
                {category.dishes.map((dish) => (
                  <Card
                    key={`${category.title}-${dish.id}`}
                    dish={dish}
                    onBuy={handleBuy} // Передаём обработчик покупки
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Компонент корзины */}
      <Cart
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        items={cartItems}
        removeItem={removeItem}
        updateQuantity={updateQuantity} // Обновляем количество
      />
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;






