import PropTypes from "prop-types";
import { useState } from "react";

const OrderForm = ({ isOpen, toggleForm, onSubmit, items, totalPrice }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && phone && address) {
      onSubmit({ name, phone, address, items, totalPrice });
      toggleForm(); // Закрываем форму после отправки
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-[#1e1e1e] transition-transform duration-300 ease-in-out`}
      style={{ width: "100%", maxWidth: "450px" }}
    >
      <div
        className="flex flex-col h-full pt-[12px] pb-[12px] px-4 overflow-y-scroll
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-800
            [&::-webkit-scrollbar-thumb]:bg-gray-600
            [&::-webkit-scrollbar-thumb]:rounded"
      >
        <div className="flex justify-end mb-6">
          <button
            className="text-white text-2xl hover:text-gray-400 transition-colors"
            onClick={toggleForm}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        <h2 className="text-lg font-bold text-white mb-4">Оформление заказа</h2>

        {/* Аккордеон с информацией о заказе */}
        <div className="bg-[#2e2e2e] rounded-lg mb-4">
          <button
            className="w-full flex justify-between items-center p-4 text-white text-lg font-bold"
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          >
            <span>Детали заказа</span>
            <i
              className={`bx ${
                isAccordionOpen ? "bx-chevron-up" : "bx-chevron-down"
              }`}
            ></i>
          </button>
          {isAccordionOpen && (
            <div className="p-4 space-y-2">
              {Array.isArray(items) && items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-400">
                    <span>{item.name}</span>
                    <span>x{item.quantity}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">Ваш заказ пуст.</p>
              )}
              <div className="flex justify-between text-white font-bold mt-4">
                <span>Общая цена:</span>
                <span>{totalPrice}₽</span>
              </div>
            </div>
          )}
        </div>

        {/* Форма для заполнения */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1">Имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#2e2e2e] text-white p-2 rounded-lg focus:outline-none"
              placeholder="Введите ваше имя"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Телефон</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#2e2e2e] text-white p-2 rounded-lg focus:outline-none"
              placeholder="Введите ваш телефон"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Адрес доставки</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-[#2e2e2e] text-white p-2 rounded-lg focus:outline-none resize-none"
              placeholder="Введите ваш адрес"
              rows="3"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-center font-bold"
          >
            Отправить заказ
          </button>
        </form>
      </div>
    </div>
  );
};

OrderForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default OrderForm;

