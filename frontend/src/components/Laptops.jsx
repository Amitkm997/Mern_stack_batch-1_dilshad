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
    }
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
