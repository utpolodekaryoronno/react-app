import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="fixed left-0 bottom-0 w-full bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-4 py-9 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-sm">
              © {new Date().getFullYear()} <span className="text-white font-semibold">Utpol Odekary</span>. All rights reserved.
            </p>

            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer