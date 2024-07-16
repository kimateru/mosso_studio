import React from 'react'

const Navbar = () => {
    return (
        <nav class="flex items-center justify-between tracking-widest py-3 s:px-3 lg:px-0">
            <p class="text-xl sm:text-3xl font-light opacity-70">MOSSO</p>
            <ul class="flex items-center gap-2 text-xs sm:text-md md:text-lg sm:gap-7">
                <li><a href="#projects" class="opacity-70 tracking-widest md:tracking hover:opacity-100">Проекты</a></li>
                <li><a href="#contacts" class="opacity-70 tracking-widest md:tracking hover:opacity-100">Контакты</a></li>
            </ul>
        </nav>  
    )
}

export default Navbar