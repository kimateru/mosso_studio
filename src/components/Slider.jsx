import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import LazyLoad from 'react-lazyload';

const Slider = ({ slides, projectName }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div className="w-[80%] sm:w-[95%] mx-auto flex flex-col text-center mt-4">
            <h1 className="text-2xl font-bold text-center mb-2">{projectName}</h1>
            <div className="relative min-w-full h-[440px] sm:h-[550px] md:h-[400px] lg:h-[550px] md:overflow-hidden md:w-full ">
                <div className="flex h-full items-center mx-auto">
                    {slides.map((slide, index) => (
                            <img
                                src={`/assets/${projectName}/${slide}`}
                                alt={`${projectName}-${index}`}
                                className={`${index === currentSlide ? 'block' : 'hidden'} w-full h-full object-cover`}
                                onError={(e) => {
                                    console.log('Image load error:', e);
                                }}
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
