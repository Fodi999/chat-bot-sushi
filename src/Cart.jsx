import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Cart = ({ isOpen, toggleCart, items, removeItem }) => {
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0); // Состояние для общей цены

  // Инициализация количества
  useEffect(() => {
    const initialQuantities = items.reduce((acc, item) => {
      acc[item.id] = acc[item.id] || 1; // Устанавливаем количество для новых товаров
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [items]);

  // Пересчёт общей цены при изменении количества
  useEffect(() => {
    const total = items.reduce((sum, item) => {
      const itemPrice = parseFloat(item.price.replace("₽", "")); // Убираем символ "₽" и конвертируем в число
      return sum + itemPrice * (quantities[item.id] || 1);
    }, 0);
    setTotalPrice(total.toFixed(2)); // Округляем до 2 знаков
  }, [quantities, items]);

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-[#1e1e1e] transition-transform duration-300 ease-in-out`}
      style={{ width: "100%", maxWidth: "450px" }}
    >
      <div className="flex flex-col h-full p-4 overflow-y-auto">
        {/* Кнопка закрытия корзины */}
        <div className="flex justify-end mb-6">
          <button
            className="text-white text-2xl hover:text-gray-400 transition-colors"
            onClick={toggleCart}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        {/* Содержимое корзины */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Корзина</h2>
          {items.length === 0 ? (
            <p className="text-gray-400">Корзина пуста.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-[#2e2e2e] p-4 rounded-lg mb-4"
              >
                <div>
                  <h3 className="text-white">{item.name}</h3>
                  <p className="text-gray-400">{item.price}</p>
                </div>

                {/* Счётчик */}
                <div className="flex items-center space-x-2">
                  <button
                    className="text-white bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <i className="bx bx-minus"></i>
                  </button>
                  <span className="text-white font-bold">
                    {quantities[item.id] || 1}
                  </span>
                  <button
                    className="text-white bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <i className="bx bx-plus"></i>
                  </button>
                </div>

                {/* Кнопка удаления */}
                <button
                  className="text-red-500 hover:text-red-700 ml-4"
                  onClick={() => removeItem(item.id)}
                >
                  <i className="bx bx-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Общая цена */}
        <div className="mt-auto bg-[#2e2e2e] p-4 rounded-lg text-white text-lg font-bold">
          Общая цена: {totalPrice}₽
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Cart;




