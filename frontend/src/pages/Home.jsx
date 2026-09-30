
import React from "react";

export default function Home() {

  const featuredProducts = [
    {
      id: 1,
      name: "Dell Inspiron 15",
      price: "₹55,000",
      category: "Laptop",
      image:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800",
    },
    {
      id: 2,
      name: "Apple MacBook Air",
      price: "₹89,900",
      category: "Laptop",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    },
    {
      id: 3,
      name: "Samsung Galaxy Book",
      price: "₹79,999",
      category: "Laptop",
      image:
        "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800",
    },
    {
      id: 4,
      name: "ASUS ROG Gaming Laptop",
      price: "₹99,999",
      category: "Gaming",
      image:
        "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=800",
    },
  ];

  return (
    <div className="bg-gray-400 min-h-screen">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[450px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600"
          alt="Shopping Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">

            <p className="text-lg mb-2">
              Welcome to ApniMarket
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Everything You Need,
              <br />
              All in One Place
            </h1>

            <p className="text-lg md:text-xl mb-6 max-w-xl">
              Discover amazing products at the best prices.
              Shop laptops, electronics, home appliances and more.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-semibold transition duration-300">
              Shop Now
            </button>

          </div>
        </div>

      </section>


      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="text-center mb-10">

          <p className="text-blue-600 font-semibold">
            OUR PRODUCTS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-3">
            Check out some of our most popular products
          </p>

        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden
                         hover:shadow-xl hover:-translate-y-1
                         transition duration-300"
            >

              {/* Product Image */}
              <div className="bg-gray-100 p-5">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-contain"
                />

              </div>


              {/* Product Details */}
              <div className="p-5">

                <p className="text-sm text-blue-600 font-medium mb-1">
                  {product.category}
                </p>

                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-xl font-bold text-gray-900 mt-3">
                  {product.price}
                </p>

                <button
                  className="w-full mt-4 bg-gray-900 text-white
                             py-2.5 rounded-lg font-semibold
                             hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= SHOP BY CATEGORY ================= */}
      <section className="bg-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Shop By Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-gray-100 p-6 rounded-xl text-center hover:bg-blue-50 transition cursor-pointer">
              <h3 className="text-xl font-bold">Laptops</h3>
              <p className="text-gray-500 mt-2">
                Latest laptops
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center hover:bg-blue-50 transition cursor-pointer">
              <h3 className="text-xl font-bold">Mobiles</h3>
              <p className="text-gray-500 mt-2">
                Smartphones & accessories
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center hover:bg-blue-50 transition cursor-pointer">
              <h3 className="text-xl font-bold">AC</h3>
              <p className="text-gray-500 mt-2">
                Cooling solutions
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center hover:bg-blue-50 transition cursor-pointer">
              <h3 className="text-xl font-bold">Accessories</h3>
              <p className="text-gray-500 mt-2">
                Gadgets & accessories
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

