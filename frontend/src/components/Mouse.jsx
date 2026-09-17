import Layout from "./Layout"

export default function Mouse() {
   let mouses = [
    {
        name: "Logitech M170",
        price: "₹799",
        description: "Wireless mouse for everyday office work",
        color: "Black",
        properties: "Wireless, 1000 DPI, USB Receiver",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=640",
    },
    {
        name: "HP X1000",
        price: "₹599",
        description: "Comfortable wired mouse for students",
        color: "Black",
        properties: "Wired, Optical Sensor, 3 Buttons",
        image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=640",
    },
    {
        name: "Dell WM126",
        price: "₹999",
        description: "Compact wireless mouse for laptops",
        color: "Black",
        properties: "Wireless, 1000 DPI, 6 Buttons",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=640",
    },
    {
        name: "Redragon M601",
        price: "₹1,299",
        description: "Gaming mouse with adjustable sensitivity",
        color: "Black & Red",
        properties: "Gaming, 3200 DPI, RGB Lighting",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=640",
    },
    {
        name: "Lenovo 300",
        price: "₹749",
        description: "Ergonomic mouse for comfortable daily use",
        color: "Grey",
        properties: "Wireless, 1200 DPI, Ergonomic Design",
        image: "https://images.unsplash.com/photo-1596348437020-5b7b5b4b5b4b?w=640",
    },
    {
        name: "Razer DeathAdder Essential",
        price: "₹2,499",
        description: "High-performance gaming mouse for gamers",
        color: "Black",
        properties: "Gaming, 6400 DPI, 5 Programmable Buttons",
        image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=640",
    }
];
  return (
    <>
    <h2 className="text-center">Popular laptops</h2>
    <div className="flex flex-wrap justify-center">
        
      {mouses.map((cur)=>(
            <Layout name={cur.name} image={cur.image} description={cur.description} color={cur.color} price={cur.price}/>
      ))}
    </div>
    </>
  )
}
