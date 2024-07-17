import React from 'react'
import Slider from './Slider'
import Header1 from '../assets/img/1.jpg';
import Header2 from '../assets/img/2.jpg';
import Header3 from '../assets/img/3.jpg';
import Header4 from '../assets/img/4.jpg';
import Header5 from '../assets/img/5.jpg';
import Header6 from '../assets/img/6.jpg';

const Projects = () => {
    return (
        <>
            <p className='border-t-2 border-b-2 border-black tracking text-sm text-center mt-5'>Портфольо</p>
            <section id='projects' className='flex flex-col flex-wrap mt-5 gap-5 sm:flex-row '>
                <Slider slides={[Header1, Header2, Header3, Header4]} projectName="proj1" />
                <Slider slides={[Header1, Header2, Header3, Header4]} projectName="proj2" />
                <Slider slides={[Header1, Header2, Header3, Header4]} projectName="proj3" />
                <Slider slides={[Header1, Header2, Header3, Header4]} projectName="proj4" />
            </section>
        </>
    )
}

export default Projects