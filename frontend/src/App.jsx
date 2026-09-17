import { Routes,Route } from "react-router-dom"
import Laptops from "./components/Laptops"
import Navbar from "./pages/Navbar"
import Aboutus from "./pages/Aboutus"
import Home from "./pages/Home"
import Mouse from "./components/Mouse"
import Footer from "./pages/Footer"
import Mobiles from "./components/Mobiles"

function App() {
  return(
    <>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<Aboutus/>}/>
         <Route path="/laptop" element={<Laptops/>}/>
         <Route path="/mouse" element={<Mouse/>}/>
         <Route path="/mobile" element={<Mobiles/>}/>
      </Routes>
      <Footer/>
      {/* <Laptops/> */}
    </>
  )
}

export default App
