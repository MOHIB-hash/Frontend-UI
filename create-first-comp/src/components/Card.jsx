const Card = ({ image, amount, currency, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:scale-105 transform transition duration-300">
      <img
        src={image}
        alt="card"
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">{amount}</span>
          <span className="text-lg">{currency}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-gray-900 text-white text-sm px-4 py-2 rounded-full w-full hover:bg-gray-800 transition duration-300">
          Request
        </button>
      </div>
    </div>
  );
};

export default Card;
