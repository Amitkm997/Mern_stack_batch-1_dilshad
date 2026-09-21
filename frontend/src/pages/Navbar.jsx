import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
export default function Navbar() {
   
   const navigate=useNavigate()

  return (
    <>
      <div className="flex justify-around bg-black">
        <div>
          <h1 className="text-white p-4 text-xl">ApniMarket</h1>

        </div>
        <div className="flex items-center">
          <ul className="flex text-white gap-4 text-center">
            <Link to="/">Home</Link>
            <Link>Contact</Link>
            <Link to="/about">Aboutus</Link>
            <li className="relative group">
              <span className="text-blue-500 cursor-pointer">
                Products
              </span>

               <div
    className="hidden group-hover:flex absolute top-full left-0
               bg-black text-white shadow-lg rounded-md
               p-2 flex-col w-32 z-50"
  >
                <Link to="/mobile">Mobile</Link>
                <Link to="/laptop">Laptops</Link>
                <Link to="/mouse">Mouse</Link>
                <Link to="/ac">AC</Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <button className="bg-blue-100 px-4 mx-4 hover:bg-blue-500" onClick={()=>navigate("/login")}>Login</button>
          <button className="bg-blue-100 px-4 mx-4 hover:bg-blue-500" onClick={()=>navigate("/register")}>register</button>
        </div>
      </div>
    </>
  )
}
