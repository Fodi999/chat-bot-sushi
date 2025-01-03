import PropTypes from "prop-types";
import { useState } from "react";
import categories from "./data/dishes";
import Card from "./components/Card";
import Cart from "./Cart";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [liked, setLiked] = useState(false);

  const handleBuy = (dish) => {
    const exists = cartItems.some((item) => item.id === dish.id);
    if (!exists) {
      setCartItems((prevItems) => [...prevItems, { ...dish, quantity: 1 }]);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
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

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#282828] transition-transform duration-300 ease-in-out`}
        style={{ width: "100%" }}
      >
        <div
          className="flex flex-col h-full pt-[calc(env(safe-area-inset-top)+4px)] pb-safe-bottom p-4 overflow-y-scroll
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-800
            [&::-webkit-scrollbar-thumb]:bg-gray-600
            [&::-webkit-scrollbar-thumb]:rounded"
        >
          {/* Верхний ряд кнопок */}
          <div className="flex justify-between items-center mb-6">
            {/* Кнопка корзины */}
            <button
              className={`flex items-center justify-center text-white text-2xl p-2 rounded-full shadow-lg border mt-[4px] ${
                cartItems.length > 0
                  ? "bg-red-500 hover:bg-red-600 border-red-600"
                  : "bg-gray-700 hover:bg-gray-600 border-gray-300"
              }`}
              onClick={toggleCart}
            >
              <i className="bx bx-cart"></i>
            </button>
            {/* Кнопка сердечка */}
            <button
              className={`flex items-center justify-center text-2xl p-2 rounded-full mt-[4px] ${
                liked ? "text-red-500" : "text-[#282828] hover:text-gray-400"
              }`}
              onClick={toggleLiked}
            >
              <i className='bx bxs-heart'></i>
              <span className={`ml-2 ${liked ? "text-red-500" : "text-[#282828]"}`}>
                Любимое
              </span>
            </button>
            {/* Кнопка закрытия меню */}
            <button
              className="text-white text-2xl hover:text-gray-400 transition-colors mt-[4px]"
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
                    onBuy={handleBuy}
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
        updateQuantity={updateQuantity}
      />
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;









