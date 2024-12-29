import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import OrderForm from "./OrderForm"; // Импорт формы заказа
import CartItem from "./components/CartItem"; // Импорт нового компонента

const Cart = ({ isOpen, toggleCart, items, removeItem }) => {
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0); // Общее количество блюд
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false); // Состояние для формы заказа

  useEffect(() => {
    const initialQuantities = items.reduce((acc, item) => {
      acc[item.id] = acc[item.id] || 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [items]);

  useEffect(() => {
    // Считаем общую стоимость
    const total = items.reduce((sum, item) => {
      const itemPrice = parseFloat(item.price.replace("₽", ""));
      return sum + itemPrice * (quantities[item.id] || 1);
    }, 0);
    setTotalPrice(total.toFixed(2));

    // Считаем общее количество блюд
    const totalItemCount = items.reduce(
      (sum, item) => sum + (quantities[item.id] || 1),
      0
    );
    setTotalItems(totalItemCount);
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

  const handleOrderClick = () => {
    setIsOrderFormOpen(true); // Переход на форму заказа
  };

  const handleOrderSubmit = (orderDetails) => {
    console.log("Заказ отправлен:", orderDetails);
    alert("Ваш заказ успешно оформлен!");
    setIsOrderFormOpen(false); // Закрываем форму заказа
    toggleCart(); // Закрываем корзину
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full ${isOpen ? "translate-x-0" : "translate-x-full"} bg-[#1e1e1e] transition-transform duration-300 ease-in-out`}
      style={{ width: "100%", maxWidth: "450px" }}
    >
      {isOrderFormOpen ? (
        <OrderForm
          isOpen={isOrderFormOpen}
          toggleForm={() => setIsOrderFormOpen(false)}
          onSubmit={handleOrderSubmit}
          items={items.map((item) => ({
            ...item,
            quantity: quantities[item.id] || 1,
          }))}
          totalPrice={totalPrice}
        />
      ) : (
        <div className="flex flex-col h-full pt-safe-top pb-safe-bottom p-6 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 overflow-y-scroll">
        <div className="flex justify-end mb-8">
          <button
            className="text-white text-3xl hover:text-gray-400 transition-colors"
            onClick={toggleCart}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-4">Корзина</h2>
            {items.length === 0 ? (
              <p className="text-gray-400">Корзина пуста.</p>
            ) : (
              items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  quantity={quantities[item.id] || 1}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  removeItem={removeItem}
                />
              ))
            )}
          </div>

          {/* Общая цена, количество блюд и кнопка заказать */}
          <div className="mt-auto bg-[#2e2e2e] p-4 rounded-lg text-white text-lg font-bold">
            <div className="flex justify-between items-center mb-2">
              <span>Общая цена:</span>
              <span>{totalPrice}₽</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span>Количество блюд:</span>
              <span>{totalItems}</span>
            </div>
            <button
              onClick={handleOrderClick}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-center font-bold"
            >
              Заказать
            </button>
          </div>
        </div>
      )}
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












