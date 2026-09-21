import Layout from "./Layout"

export default function Laptops() {
 let laptops = [
  {
    name: "Dell Inspiron 15",
    price: "₹55,000",
    description: "Perfect for students and office work",
    color: "Silver",
    properties: "Intel i5, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=640",
  },
  {
    name: "Lenovo IdeaPad Slim 5",
    price: "₹62,000",
    description: "Slim and powerful laptop for professionals",
    color: "Arctic Grey",
    properties: "AMD Ryzen 5, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=640",
  },
  {
    name: "HP Pavilion 14",
    price: "₹58,500",
    description: "Reliable laptop for everyday computing",
    color: "Natural Silver",
    properties: "Intel i5, 8GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=640",
  },
  {
    name: "ASUS Vivobook 15",
    price: "₹52,999",
    description: "Lightweight laptop for students and creators",
    color: "Cool Silver",
    properties: "Intel i5, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=640",
  },
  {
    name: "Acer Aspire 5",
    price: "₹49,990",
    description: "Affordable laptop for coding and productivity",
    color: "Steel Gray",
    properties: "Intel i5, 8GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=640",
  },
  {
    name: "Apple MacBook Air",
    price: "₹89,900",
    description: "Premium and compact laptop for developers",
    color: "Midnight",
    properties: "Apple Silicon, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=640",
  },

  // More Products
  {
    name: "Dell XPS 13",
    price: "₹1,09,999",
    description: "Premium compact laptop for developers and professionals",
    color: "Platinum Silver",
    properties: "Intel Core Ultra 7, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=640",
  },
  {
    name: "Lenovo ThinkPad E14",
    price: "₹68,999",
    description: "Business laptop with excellent keyboard and durability",
    color: "Black",
    properties: "Intel i5, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=640",
  },
  {
    name: "HP Victus 15",
    price: "₹74,999",
    description: "Powerful gaming laptop for gaming and development",
    color: "Performance Blue",
    properties: "Intel i5, 16GB RAM, 512GB SSD, RTX Graphics",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=640",
  },
  {
    name: "ASUS ROG Strix G15",
    price: "₹99,999",
    description: "High-performance gaming laptop for demanding tasks",
    color: "Eclipse Gray",
    properties: "Ryzen 7, 16GB RAM, 1TB SSD, RTX Graphics",
    image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=640",
  },
  {
    name: "Acer Nitro V",
    price: "₹72,990",
    description: "Gaming laptop suitable for gaming and programming",
    color: "Black",
    properties: "Intel i5, 16GB RAM, 512GB SSD, RTX Graphics",
    image: "https://images.unsplash.com/photo-1603481546238-487240415921?w=640",
  },
  {
    name: "MSI Modern 14",
    price: "₹57,999",
    description: "Slim laptop designed for students and professionals",
    color: "Classic Black",
    properties: "Intel i5, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=640",
  },
  {
    name: "Samsung Galaxy Book",
    price: "₹79,999",
    description: "Slim and lightweight laptop for everyday productivity",
    color: "Graphite",
    properties: "Intel Core i5, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=640",
  },
  {
    name: "Microsoft Surface Laptop",
    price: "₹94,999",
    description: "Elegant touchscreen laptop for professionals",
    color: "Platinum",
    properties: "Intel Core i5, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=640",
  },
  {
    name: "LG Gram 14",
    price: "₹1,04,999",
    description: "Ultra-lightweight laptop with long battery life",
    color: "Snow White",
    properties: "Intel Core Ultra 5, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=640",
  },
  {
    name: "Huawei MateBook D15",
    price: "₹54,999",
    description: "Affordable laptop for office work and students",
    color: "Space Gray",
    properties: "Ryzen 5, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=640",
  },
  {
    name: "Alienware M16",
    price: "₹1,49,999",
    description: "High-end gaming laptop for professional gamers",
    color: "Dark Metallic",
    properties: "Intel i7, 32GB RAM, 1TB SSD, RTX Graphics",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=640",
  },
];
  return (
    <>
    <h2 className="text-center">Popular laptops</h2>
    <div className="flex flex-wrap justify-center">
        
      {laptops.map((cur)=>(
            <Layout name={cur.name} image={cur.image} description={cur.description} color={cur.color} price={cur.price}/>
      ))}
    </div>
    </>
  )
}
