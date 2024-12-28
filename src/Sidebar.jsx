// src/Sidebar.jsx 
import PropTypes from "prop-types";
import categories from "./data/dishes"; // Импортируем данные
import Card from "./components/Card"; // Импортируем компонент карточки

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const handleBuy = (dish) => {
    alert(`Вы купили: ${dish.name}`);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-[#1e1e1e] transition-transform duration-300 ease-in-out`}
      style={{ width: "100%" }}
    >
      <div className="flex flex-col h-full p-4 overflow-y-scroll">
        <div className="flex justify-end mb-6">
          <button
            className="text-white text-2xl hover:text-gray-400 transition-colors"
            onClick={toggleSidebar}
          >
            <i className="bx bx-arrow-back"></i>
          </button>
        </div>

        {categories.map((category, index) => (
          <div key={`category-${index}`} className="mb-6">
            <h2 className="text-lg font-bold text-white mb-4">{category.title}</h2>
            <div
              className="flex overflow-x-auto space-x-4 pb-4
                [&::-webkit-scrollbar]:h-2
                [&::-webkit-scrollbar-track]:bg-gray-200
                [&::-webkit-scrollbar-thumb]:bg-gray-400
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
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;

