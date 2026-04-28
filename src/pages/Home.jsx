import React from 'react'
const Home = () => {
  return (
    <section className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Frontend Expert & <span className="text-amber-400">Laravel Web App Developer</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg md:text-xl">
          I build modern, responsive and high-performance web applications using 
          React, Tailwind CSS and Laravel.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition">
            View Projects
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
