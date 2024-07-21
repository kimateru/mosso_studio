import React from 'react';
import { FaTelegram, FaInstagram, FaWhatsapp, FaViber } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = () => {
  return (
    <section id='hero' className='flex flex-col mt-4 text-center gap-5'>
      <div className='flex flex-col gap-5 justify-between animate-fadeIn'>
        <p className='border-t-2 border-b-2 border-black tracking text-sm animate-slideIn'>Студия дизайна и 3D</p>
        <h1 className='font-bold text-xl md:text-2xl lg:text-3xl animate-slideIn'>Дизайн, c вниманием к каждой детали.</h1>
        <LazyLoadImage
          src="/assets/img/1.webp"
          alt="project img"
          effect="blur"
          className="h-[15%] object-cover mt-4 md:h-[600px] sm:w-[80%] lg:w-[60%] sm:mx-auto"
        />
        <p className='text-sm max-w-[80%] mx-auto text-center lg:max-w-[60%] md:text-base lg:text-lg animate-fadeIn'>
          В стремительном ритме современной жизни дом- это то место, где хочется отдохнуть телом и душой. Каждый интерьер индивидуален и уникален, поэтому мы детально изучаем ваши желания и потребности, создавая пространство, идеально гармонирующее с вашим образом жизни.
        </p>
      </div>
      <LazyLoadImage
        src="/assets/icons/logo.webp"
        alt="Mosso"
        effect="blur"
        className='rounded-full mx-auto animate-zoomIn'
        width={150}
        height={150}
      />
      <div className='flex flex-col gap-5 justify-between mt-5 animate-fadeIn' id='contacts'>
        <p className='text-sm max-w-[80%] mx-auto text-center lg:max-w-[60%] md:text-base lg:text-lg animate-slideIn'>
          Добрый день! Меня зовут Мария, я дизайнер интерьеров, 3D визуализатор и основатель студии MOSSO.
        </p>
        <p className='border-t-2 border-b-2 border-black tracking text-sm animate-slideIn'>Философия студии</p>
        <div className='max-w-[80%] lg:max-w-[60%] mx-auto flex flex-col items-center animate-fadeIn'>
          <p className='text-sm text-center md:text-base lg:text-lg'>
            Философия нашей студии - превратить вашу мечту о идеальном доме в реальность, делая это с максимальным удобством и без лишнего стресса, чтобы после завершения этого этапа вашей жизни, у вас остались только теплые воспоминания и впечатления.
          </p>
          <ul className='flex flex-col items-center gap-2 text-3xl mt-3 sm:flex-row w-full text-center justify-between'>
            <li className='w-full flex justify-center'>
              <a className='w-[119px] flex items-center transition-transform transform hover:scale-105 hover:text-pink-600 animate-fadeIn' href="https://www.instagram.com/mossostudio__/"><FaInstagram /> <span className='text-sm lg:text-base ml-2'>- @mosso</span></a>
            </li>
            <li className='w-full flex justify-center'>
              <a className='w-[119px] flex items-center transition-transform transform hover:scale-105 hover:text-blue-500 animate-fadeIn' href="https://t.me/mossost" target="_blank" rel="noopener noreferrer"><FaTelegram /> <span className='text-sm lg:text-base ml-2'>- @mosso</span></a>
            </li>
            <li className='w-full flex justify-center'>
              <a className='w-[119px] flex items-center transition-transform transform hover:scale-105 hover:text-green-500 animate-fadeIn' href="https://wa.me/068710771"><FaWhatsapp /> <span className='text-sm ml-2'>- 068710771</span></a>
            </li>
            <li className='w-full flex justify-center'>
              <a className='w-[119px] flex items-center transition-transform transform hover:scale-105 hover:text-purple-600 animate-fadeIn' href="viber://chat?number=%2B37368710771"><FaViber /><span className='text-sm ml-2'>- 068710771</span></a>
            </li>
          </ul>
        </div>
        <p className='border-t-2 border-b-2 border-black tracking text-sm h-[24px] animate-slideIn'></p>
        <div
          className='relative h-[500px] w-full bg-cover bg-bottom animate-fadeIn'
          style={{ backgroundImage: `url(/assets/img/2.webp)` }}
        >
        </div>
      </div>
      <div className='flex flex-col gap-5 justify-between animate-fadeIn'>
        <p className='border-t-2 border-b-2 border-black tracking text-sm animate-slideIn'>MOSSO</p>
        <h1 className='font-bold text-xl md:text-2xl lg:text-3xl animate-slideIn'>Ваш дом-это ваше отражение!</h1>
        <p className='text-sm max-w-[80%] mx-auto text-center md:text-base lg:text-lg animate-fadeIn'>
          Мы специализируемся на минималистичных интерьерах, которые обеспечивают максимальный комфорт и эстетическое наслаждение.
        </p>
      </div>
      <h2 className='text-xl font-light tracking-wide animate-slideIn'>ДОБРО ПОЖАЛОВАТЬ В СТУДИЮ MOSSO</h2>
    </section>
  );
}

export default Hero;
