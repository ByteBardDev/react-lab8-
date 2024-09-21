import React from 'react';

const Card = ({ title, features, image, liked, onLike }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <ul className="text-gray-600 mt-2">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        <button
          className={`mt-4 text-3xl ${liked ? 'text-red-500' : 'text-gray-400'}`}
          onClick={onLike}
          style={{ transform: liked ? 'scale(1.5)' : 'scale(1)', transition: 'transform 0.3s ease' }}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default Card;
