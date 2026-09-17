import Layout from "./Layout"

export default function Mobiles() {
  
let mobiles = [
    {
        name: "Samsung Galaxy S24",
        price: "₹74,999",
        description: "Powerful smartphone for everyday use and photography",
        color: "Phantom Black",
        properties: "8GB RAM, 256GB Storage, 50MP Camera",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=640",
    },
    {
        name: "iPhone 15",
        price: "₹69,999",
        description: "Premium smartphone with powerful performance",
        color: "Blue",
        properties: "6GB RAM, 128GB Storage, 48MP Camera",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=640",
    },
    {
        name: "OnePlus 12",
        price: "₹64,999",
        description: "Fast and smooth smartphone for performance lovers",
        color: "Emerald Green",
        properties: "12GB RAM, 256GB Storage, 50MP Camera",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=640",
    },
    {
        name: "Google Pixel 8",
        price: "₹59,999",
        description: "Excellent camera phone with clean Android experience",
        color: "Hazel",
        properties: "8GB RAM, 128GB Storage, 50MP Camera",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=640",
    },
    {
        name: "Redmi Note 13 Pro",
        price: "₹27,999",
        description: "Affordable smartphone with excellent display and camera",
        color: "Midnight Black",
        properties: "8GB RAM, 256GB Storage, 200MP Camera",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=640",
    },
    {
        name: "Nothing Phone 2",
        price: "₹39,999",
        description: "Stylish smartphone with unique design and smooth performance",
        color: "White",
        properties: "12GB RAM, 256GB Storage, 50MP Camera",
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=640",
    }
];


  return (
    <>
    <h2 className="text-center">Popular laptops</h2>
    <div className="flex flex-wrap justify-center">
        
      {mobiles.map((cur)=>(
            <Layout name={cur.name} image={cur.image} description={cur.description} color={cur.color} price={cur.price}/>
      ))}
    </div>
    </>
  )
}
