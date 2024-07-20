import React from 'react';
import Slider from './Slider';
import data from '../data/data';

const Projects = () => {
  return (
    <>
      <p className='border-t-2 border-b-2 border-black tracking text-sm text-center mt-5 container mx-auto animate-slideIn'>Проекты</p>
      <section id='projects' className='grid grid-col-1 md:grid-cols-2 lg:grid-rows-2 mt-5 text-center px-4 gap-3 lg:max-h-[1400px]'>
        {data.map((categoryData, index) => (
          <div key={index} className='animate-fadeIn'>
            <Slider slides={categoryData[Object.keys(categoryData)[0]]} projectName={Object.keys(categoryData)[0]} />
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
