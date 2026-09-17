import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-around bg-black">
        <div>
          <h1 className="text-white p-4 text-xl">ApniMarket</h1>

        </div>
        <div className="flex items-center">
          <ul className="flex text-white mx-4">
            <Link to="/">Home</Link>
            <Link>Contact</Link>
            <Link to="/about">Aboutus</Link>
            <li className="relative group">
              <span className="text-blue-500 cursor-pointer">
                Products
              </span>

              <div className="hidden group-hover:flex flex-col absolute bg-black text-white shadow-md p-3">
                <Link to="/mobile">Mobile</Link>
                <Link to="/laptop">Laptops</Link>
                <Link to="/mouse">Mouse</Link>
                <Link to="/ac">AC</Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <button className="bg-blue-100 px-4 mx-4 hover:bg-blue-500">Login</button>
          <button className="bg-blue-100 px-4 mx-4 hover:bg-blue-500">Logout</button>
        </div>
      </div>
    </>
  )
}
