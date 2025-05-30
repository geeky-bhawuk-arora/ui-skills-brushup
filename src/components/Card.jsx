import React from 'react';

const Card = (props) => {
  const { user, city, age, image } = props;
  
  console.log(props)

  return (
    <div className="mr-5 bg-white rounded-xl w-80 text-black ">
      <img
        src={image || 'img'}
        alt="User"
        className="w-full h-24 object-cover"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">{user}</h2>
        <p className="text-gray-700 mb-1">City: {city}</p>
        <p className="text-gray-700 mb-4">Age: {age}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300">
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default Card;
