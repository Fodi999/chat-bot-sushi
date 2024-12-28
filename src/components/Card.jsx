// src/components/Card.jsx
import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({ dish, onBuy }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleImageClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="relative min-w-[250px] bg-[#2e2e2e] rounded-lg shadow-lg overflow-hidden">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={handleImageClick}
      />
      {!isHidden && (
        <>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
            <h3 className="text-lg font-bold">{dish.name}</h3>
            <p className="text-sm text-gray-300">{dish.description}</p>
            <p className="text-md font-semibold mt-2">{dish.price}</p>
          </div>
          <button
            onClick={() => onBuy(dish)}
            className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm"
          >
            Купить
          </button>
        </>
      )}
    </div>
  );
};

Card.propTypes = {
  dish: PropTypes.object.isRequired,
  onBuy: PropTypes.func.isRequired,
};

export default Card;

