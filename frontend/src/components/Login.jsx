
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
     const navigate=useNavigate();
  return (
    <>
<div className="min-h-screen bg-gray-800 flex items-center justify-center px-4">
  <form className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
      Login Form
    </h1>

    {/* Email */}
    <div className="mb-5">
      <label
        htmlFor="email"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Email
      </label>

      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition"
      />
    </div>

    {/* Password */}
    <div className="mb-6">
      <label
        htmlFor="password"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Password
      </label>

      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition"
      />
    </div>

    {/* Login Button */}
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-lg 
                 font-semibold hover:bg-blue-700 
                 transition duration-300"
    onClick={()=>navigate('/')}>
      Login
    </button>

  </form>
</div>


    </>
  )
}
