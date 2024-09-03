import React from 'react';

const ProductCard = ({ image, title }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 m-4">
      <img src={image} alt="" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
        <button className="mt-4 bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600 transition duration-300">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
