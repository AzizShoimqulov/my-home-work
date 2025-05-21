import React from 'react'

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-blue-600 text-white transition-all duration-300 ease-in-out z-50
        ${isOpen ? 'w-[250px]' : 'w-0 overflow-hidden'}`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} className="text-white text-xl">×</button>
      </div>
      <ul className="p-4 space-y-2">
        <li><a href="#" className="hover:underline">Dashboard</a></li>
        <li><a href="#" className="hover:underline">Tasks</a></li>
        <li><a href="#" className="hover:underline">Settings</a></li>
      </ul>
    </div>
  )
}
