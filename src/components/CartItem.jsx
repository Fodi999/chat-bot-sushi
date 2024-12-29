
// src/components/CartItem.jsx
import PropTypes from "prop-types";

const CartItem = ({
  item,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  return (
    <div className="flex items-center bg-[#2e2e2e] p-4 rounded-lg mb-4">
      {/* Фото товара */}
      <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Информация о товаре */}
      <div className="flex-1">
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
        <span className="text-white font-bold">{quantity}</span>
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
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartItem;
