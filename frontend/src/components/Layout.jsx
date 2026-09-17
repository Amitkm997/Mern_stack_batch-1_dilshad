
export default function Layout(props) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full">

        {/* Product Image */}
        <div className=" bg-gray-100 p-4">
          <img
            className="w-full h-52 object-contain rounded-lg"
            src={props.image}
            alt={props.name}
          />

      

          {/* Color */}
          <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
            {props.color}
          </span>
        </div>

        {/* Product Details */}
        <div className="p-5">

          {/* Product Name */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {props.name}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-3">
            {props.description}
          </p>

          {/* Properties */}
          <p className="text-gray-500 text-sm mb-4">
            {props.properties}
          </p>

          {/* Price + Button */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-blue-600">
              {props.price}
            </span>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

