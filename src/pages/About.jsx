import React from 'react'

const About = () => {
  return (
    
    <div>
      <section
      className="relative min-h-[calc(100vh-100px)] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-amber-400">Me</span>
        </h1>

        <p className="mt-5 text-gray-200 text-lg">
          I am a passionate Frontend Expert & Laravel Web App Developer who loves
          building clean, fast and user-friendly web applications.
        </p>
      </div>
      </section>
    </div>
  )
}

export default About
