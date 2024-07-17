import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Slider = ({ slides, projectName }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div className="relative sm:w-[48%] md:w-[20%] mx-auto">
            <h1 className="text-2xl font-bold text-left mb-4">{projectName}</h1>
            <div className="relative w-full h-[390px] overflow-hidden">
                <div className="flex h-full items-center justify-center mx-auto">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt={projectName}
                            className={`w-full ${index === currentSlide ? 'block' : 'hidden'} h-full w-full object-cover sm:object-contain`}
                        />
                    ))}
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
                    <button
                        onClick={prevSlide}
                        className="bg-black bg-opacity-50 text-white p-2 rounded-full transition duration-300 hover:bg-opacity-75 focus:outline-none"
                    >
                        <IoIosArrowBack className="text-2xl" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-black bg-opacity-50 text-white p-2 rounded-full transition duration-300 hover:bg-opacity-75 focus:outline-none"
                    >
                        <IoIosArrowForward className="text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
