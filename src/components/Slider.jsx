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

    const getImagePath = (slide) => {
        try {
            return require(`../assets/img/${projectName}/${slide}`);
        } catch (err) {
            console.error('Image load error:', err);
            return null; // or provide a placeholder image
        }
    };

    return (
        <div className="relative mx-auto flex flex-col text-center">
            <h1 className="text-2xl font-bold text-center mb-4">{projectName}</h1>
            <div className="relative max-w-[300px] h-[390px] md:overflow-hidden md:w-full">
                <div className="flex h-full items-center mx-auto">
                    {slides.map((slide, index) => {
                        const imagePath = getImagePath(slide);
                        return (
                            imagePath && (
                                <LazyLoad key={index} height={'100%'} once className="h-full">
                                    <img
                                        src={imagePath}
                                        alt={`${projectName}-${index}`}
                                        className={`${index === currentSlide ? 'block' : 'hidden'} w-full h-full object-fill`}
                                        onError={(e) => {
                                            console.log('Image load error:', e);
                                        }}
                                    />
                                </LazyLoad>
                            )
                        );
                    })}
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
