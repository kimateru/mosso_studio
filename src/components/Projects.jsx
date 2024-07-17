import React from 'react';
import Slider from './Slider';
import data from '../data/data';

const Projects = () => {
  return (
    <>
      <p className='border-t-2 border-b-2 border-black tracking text-sm text-center mt-5 container mx-auto'>Портфольо</p>
      <section id='projects' className='grid grid-col-1 sm:grid-cols-2 xl:grid-cols-4 mt-5 gap-3 px-2 text-center'>
        {data.map((categoryData, index) => (
          <Slider key={index} slides={categoryData[Object.keys(categoryData)[0]]} projectName={Object.keys(categoryData)[0]} />
        ))}
      </section>
    </>
  );
};

export default Projects;
// flex flex-col flex-wrap mt-5 gap-5 sm:flex-row