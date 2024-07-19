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
        <div className="relative mx-auto flex flex-col text-center h-full w-full">
            <h1 className="text-2xl font-bold text-center">{projectName}</h1>
            <div className="relative md:overflow-hidden flex items-center justify-center w-full">
                <div className="flex h-full items-center mx-auto w-full">
                    {slides.map((slide, index) => (
                        <img
                            src={`/assets/${projectName}/${slide}`}
                            alt={`${projectName}-${index}`}
                            className={`${index === currentSlide ? 'block' : 'hidden'} w-full h-full object-contain`}
                            onError={(e) => {
                                console.log('Image load error:', e);
                            }}
                        />
                    ))}
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-[70%] px-4">
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
