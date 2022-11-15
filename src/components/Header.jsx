import React, { useState } from 'react'
import { RiShoppingCartLine, RiHeart2Line, RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className='h-[10vh] text-gray-400 py-4 px-10 flex items-cente justify-between bg-[#181A20] z-40'>
            {/* Menu Movile*/}
            <button className='lg:hidden text-4xl' onClick={() => setShowMenu(!showMenu)}>
                <RiMenu2Line />
            </button>
            <div className={`fixed left-0 bg-[#181a20] w-full h-full z-50 transition-all ${showMenu ? "top-0" : "-top-full"
                }`}>
                <button className='text-4xl p-4' onClick={() => setShowMenu(!showMenu)}>
                    <RiCloseLine />
                </button>
                <ul className=''>
                    <li><a href="#" className='block text-2xl text-center p-6'>Home</a></li>
                    <li><a href="#" className='block text-2xl text-center p-6'>Streams</a></li>
                    <li><a href="#" className='block text-2xl text-center p-6'>Game Store</a></li>
                    <li><a href="#" className='block text-2xl text-center p-6'>News</a></li>
                </ul>
            </div>
            {/* Menu */}
            <ul className="hidden lg:flex items-center gap-6 text-xl">
                <li><a href="#" className='hover:text-[#e58d27] transition-colors'>Home</a></li>
                <li><a href="#" className='hover:text-[#e58d27] transition-colors'>Streams</a></li>
                <li><a href="#" className='hover:text-[#e58d27] transition-colors'>Game Store</a></li>
                <li><a href="#" className='hover:text-[#e58d27] transition-colors'>News</a></li>
            </ul>
            {/* User Menu */}
            <ul className='flex items-center sm:gap-6 gap-4'>
                <li>
                    <button className='hover:text-[#e58d27] hover:border-[#e58d27] transition-colors text-xl border-2 rounded-full sm:p-2 p-1'><RiShoppingCartLine /></button>
                </li>
                <li>
                    <button className='hover:text-[#e58d27] hover:border-[#e58d27] transition-colors text-xl border-2 rounded-full sm:p-2 p-1'><RiHeart2Line /></button>
                </li>
                <li>
                    <button className='hover:text-[#e58d27] hover:border-[#e58d27] transition-colors text-xl border-2 rounded-full sm:p-2 p-1'><FiUser /></button>
                </li>
            </ul>
        </header>
    )
}
