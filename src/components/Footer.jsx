import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#191919] text-white py-4 mt-4">
            <div className="container mx-auto text-center flex flex-col gap-3 mt-2 text-sm">
                <p className="mb-2">© 2024 MOSSO. All rights reserved.</p>
                <p className="mb-2">
                    Contact us at: 
                    <a href="mailto:russu_mr@mail.ru" className="hover:text-gray-500"> russu_mr@mail.ru</a> | 
                    <a href="tel:+37368710771" className=" hover:text-gray-500">+373(68)710771</a>
                </p>
                <p className="flex items-center justify-center">
                    Created by: 
                    <a href="https://t.me/kimateru" target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center text-stone-400 hover:underline">
                        <FaTelegramPlane className="mr-1 text-white" /> @kimateru
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
