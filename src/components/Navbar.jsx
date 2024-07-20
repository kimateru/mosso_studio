import React from 'react'

const Navbar = () => {
    return (
        <nav class="flex items-center justify-between tracking-widest py-3 s:px-3 lg:px-0">
            <p class="text-xl sm:text-3xl font-light opacity-70">MOSSO</p>
            <ul class="flex items-center gap-2 text-xs sm:text-md md:text-lg sm:gap-7">
                <li class="relative group">
                    <a href="#projects" class="opacity-70 tracking-widest md:tracking relative z-10 group-hover:opacity-100 transition-opacity duration-300">Проекты</a>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </li>
                <li class="relative group">
                    <a href="#contacts" class="opacity-70 tracking-widest md:tracking relative z-10 group-hover:opacity-100 transition-opacity duration-300">Контакты</a>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar