import React from 'react'
import { navLinks } from '../constants/Navlinks'
const Navbar = () => {
  return (
    <div className='sticky text-center  bg-[#54D449] border-b-4 border-black'>
      <ul className='flex gap-3 justify-center mb-1'>
      {navLinks.map((link)=>(
        <a href={link.route}>
          <li>-{link.label}</li>
        </a>
      ))}
      </ul>
    </div>
  )
}

export default Navbar
