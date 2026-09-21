import Layout from "./Layout"

export default function Ac() {
 let acs = [
  {
    name: "LG 1.5 Ton 5 Star Split AC",
    price: "₹42,999",
    description: "Energy-efficient AC suitable for medium-sized rooms",
    color: "White",
    properties: "1.5 Ton, 5 Star, Inverter, Copper Condenser",
    image: "https://images.unsplash.com/photo-1631545806609-4b5f7c2c6e7a?w=640",
  },
  {
    name: "Samsung 1.5 Ton 5 Star Split AC",
    price: "₹44,990",
    description: "Powerful cooling with smart energy-saving technology",
    color: "White",
    properties: "1.5 Ton, 5 Star, Inverter, Wi-Fi",
    image: "https://images.unsplash.com/photo-1629454309351-3c8a1e8a1f6c?w=640",
  },
  {
    name: "Voltas 1.5 Ton 3 Star Split AC",
    price: "₹34,999",
    description: "Reliable cooling for bedrooms and living rooms",
    color: "White",
    properties: "1.5 Ton, 3 Star, Inverter, Copper Condenser",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=640",
  },
  {
    name: "Daikin 1.5 Ton 5 Star Split AC",
    price: "₹46,999",
    description: "Premium AC with fast and efficient cooling",
    color: "White",
    properties: "1.5 Ton, 5 Star, Inverter, PM2.5 Filter",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=640",
  },
  {
    name: "Panasonic 1.5 Ton 5 Star Split AC",
    price: "₹41,990",
    description: "Smart AC with powerful cooling and air purification",
    color: "White",
    properties: "1.5 Ton, 5 Star, Inverter, Wi-Fi",
    image: "https://images.unsplash.com/photo-1617104678098-de229db51175?w=640",
  },
  {
    name: "Blue Star 1.5 Ton 5 Star Split AC",
    price: "₹39,999",
    description: "Efficient cooling designed for Indian summers",
    color: "White",
    properties: "1.5 Ton, 5 Star, Inverter, Copper Condenser",
    image: "https://images.unsplash.com/photo-1566032879-5b7e7e7f1c7d?w=640",
  },
  {
    name: "Carrier 1.5 Ton 5 Star Split AC",
    price: "₹40,999",
    description: "Powerful and dependable cooling for your home",
    color: "White",
    properties: "1.5 Ton, 5 Star, Inverter, Turbo Mode",
    image: "https://images.unsplash.com/photo-1635274605638-7f2c8b6e7a9f?w=640",
  },
  {
    name: "Hitachi 1.5 Ton 5 Star Split AC",
    price: "₹43,499",
    description: "Fast cooling AC with advanced temperature control",
    color: "White",
    properties: "1.5 Ton, 5 Star, Inverter, Copper Condenser",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=640",
  },
  {
    name: "Godrej 1.5 Ton 3 Star Split AC",
    price: "₹32,999",
    description: "Affordable and efficient AC for everyday cooling",
    color: "White",
    properties: "1.5 Ton, 3 Star, Inverter, Anti-Dust Filter",
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=640",
  },
  {
    name: "Whirlpool 1.5 Ton 3 Star Split AC",
    price: "₹31,999",
    description: "Comfortable cooling with energy-saving performance",
    color: "White",
    properties: "1.5 Ton, 3 Star, Inverter, Copper Condenser",
    image: "https://images.unsplash.com/photo-1585128903991-4d9c9f0f4f7b?w=640",
  },
  {
    name: "Lloyd 1.5 Ton 5 Star Split AC",
    price: "₹37,999",
    description: "Modern AC with powerful cooling and low noise",
    color: "White",
    properties: "1.5 Ton, 5 Star, Inverter, Anti-Bacterial Filter",
    image: "https://images.unsplash.com/photo-1597076545399-91a3ff0e71b6?w=640",
  },
  {
    name: "Haier 1.5 Ton 5 Star Split AC",
    price: "₹38,990",
    description: "Smart cooling solution for modern homes",
    color: "White",
    properties: "1.5 Ton, 5 Star, Inverter, Turbo Cooling",
    image: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=640",
  },
  {
    name: "O General 1.5 Ton 5 Star Split AC",
    price: "₹54,999",
    description: "Premium AC built for powerful and long-lasting cooling",
    color: "White",
    properties: "1.5 Ton, 5 Star, Inverter, Heavy-Duty Compressor",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=640",
  },
  {
    name: "LG 2 Ton 5 Star Split AC",
    price: "₹56,999",
    description: "High-capacity AC for large rooms and living spaces",
    color: "White",
    properties: "2 Ton, 5 Star, Inverter, Dual Rotary Compressor",
    image: "https://images.unsplash.com/photo-1594741158704-5a2a6c7d6e7f?w=640",
  },
  {
    name: "Samsung 1 Ton 5 Star Split AC",
    price: "₹36,999",
    description: "Compact and energy-efficient AC for small rooms",
    color: "White",
    properties: "1 Ton, 5 Star, Inverter, Digital Display",
    image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=640",
  },
  {
    name: "Voltas 2 Ton 3 Star Split AC",
    price: "₹47,999",
    description: "Powerful cooling for large bedrooms and halls",
    color: "White",
    properties: "2 Ton, 3 Star, Inverter, Copper Condenser",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=640",
  },
  {
    name: "Daikin 1 Ton 5 Star Split AC",
    price: "₹39,499",
    description: "Compact premium AC with efficient cooling",
    color: "White",
    properties: "1 Ton, 5 Star, Inverter, PM2.5 Filter",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=640",
  },
  {
    name: "Blue Star 2 Ton 5 Star Split AC",
    price: "₹52,999",
    description: "High-performance AC for spacious rooms",
    color: "White",
    properties: "2 Ton, 5 Star, Inverter, Turbo Cool",
    image: "https://images.unsplash.com/photo-1631545806609-4b5f7c2c6e7a?w=640",
  },
];
  return (
    <>
    <h2 className="text-center">Popular ACs</h2>
    <div className="flex flex-wrap justify-center">
        
      {acs.map((cur)=>(
            <Layout name={cur.name} image={cur.image} description={cur.description} color={cur.color} price={cur.price}/>
      ))}
    </div>
    </>
  )
}
