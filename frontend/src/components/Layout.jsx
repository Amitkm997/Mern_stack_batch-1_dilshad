import ViewDetails from "../pages/ViewDetails";
import { useNavigate } from "react-router-dom";
export default function Layout(props) {
    const navigate=useNavigate()
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
      
      <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full">

        {/* Product Image */}
        <div className="relative bg-gray-700 p-4">

          <img
            className="w-full h-52 object-contain rounded-lg"
            src={props.name.image}
            alt={props.name.name}
          />

          {/* Color */}
          <span className="absolute top-6 right-6 bg-gray-900 text-gray-100 text-xs font-semibold px-3 py-1 rounded-full shadow">
            {props.name.color}
          </span>

        </div>

        {/* Product Details */}
        <div className="p-5">

          {/* Product Name */}
          <h2 className="text-xl font-bold text-white mb-2">
            {props.name.name}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-3">
            {props.name.description}
          </p>

          {/* Properties */}
          <p className="text-gray-400 text-sm mb-4">
            {props.name.properties}
          </p>

          {/* Price + Button */}
          <div className="flex items-center justify-between">

            <span className="text-xl font-bold text-gray-100">
              {props.name.price}
            </span>

            <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-white transition"
              onClick={()=>navigate(`/viewDetails/${props.name}`)}>
              View Details
            </button>

          </div>

        </div>
      </div>

    </div>
  );
}