import Logo from '../assets/icons/logo.jpg';
import Header1 from '../assets/img/1.jpg';
import Header2 from '../assets/img/2.jpg';
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

const Hero = () => {
    return (
        <section id='hero' className='flex flex-col mt-4 text-center'>
            <div className='flex flex-col gap-5 justify-between'>
                <p className='border-t-2 border-b-2 border-black tracking text-sm'>Студия дизайна и 3D</p>
                <h1 className='font-bold text-xl'>Дизайн, c вниманием к каждой детали.</h1>
                <img src={Header1} alt="project img" className='h-[15%] object-cover mt-4' />
                <p className='text-sm max-w-[80%] mx-auto text-left'>В стремительном ритме современной жизни дом- это то место, где хочется отдохнуть телом и душой. Каждый интерьер индивидуален и уникален, поэтому мы детально изучаем ваши желания и потребности, создавая пространство, идеально гармонирующее с вашим образом жизни.</p>
            </div>
            <div className='flex flex-col gap-5 justify-between mt-5'>
                <img src={Logo} alt="Mosso" className='rounded-full w-[150px] mx-auto' />
                <p className='text-sm max-w-[80%] mx-auto text-left'>Добрый день! Меня зовут Мария,я дизайнер интерьеров ,3D визуализатор и основатель студии MOSSO.</p>
                <p className='border-t-2 border-b-2 border-black tracking text-sm'>Философия студии</p>
                <p className='text-sm max-w-[80%] mx-auto text-left'>
                Философия нашей студии - превратить вашу мечту о идеальном доме в реальность, делая это с максимальным удобством и без лишнего стресса, чтобы после завершения этого этапа вашей жизни,у вас остались только теплые воспоминания и впечатления.</p>
                <ul className='grid grid-cols-1 grid-rows-4 gap-4 text-3xl items-start px-4 mt-3 mx-auto sm:grid-cols-2 sm:grid-rows-2'>
                    <a className='flex items-center gap-2' href=""><FaTelegram /> <span className='text-sm'>- @mosso</span></a>
                    <a className='flex items-center gap-2' href=""><FaInstagram /> <span className='text-sm'>- @mosso</span></a>
                    <a className='flex items-center gap-2' href=""><FaWhatsapp /> <span className='text-sm'>- +373 (69) 666999</span></a>
                    <a className='flex items-center gap-2' href=""><FaViber /><span className='text-sm'>- +373 (69) 666999</span></a>
                </ul>
                <div
                    className='relative h-[500px] w-full bg-cover bg-center bg-fixed mt-4'
                    style={{ backgroundImage: `url(${Header2})` }}
                >
                </div>
            </div>
            <div className='flex flex-col gap-5 justify-between mt-5'>
                <p className='border-t-2 border-b-2 border-black tracking text-sm'>MOSSO</p>
                <h1 className='font-bold text-xl'>Ваш дом-это ваше отражение!</h1>
                <p className='text-sm max-w-[80%] mx-auto text-left'>Мы специализируемся на минималистичных интерьерах, которые обеспечивают максимальный комфорт и эстетическое наслаждение.</p>
            </div>
            <div className='w-full h-1 border-b-2 mt-5'></div>
        </section>
    );
}

export default Hero;
