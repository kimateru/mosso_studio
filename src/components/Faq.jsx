import { useState } from 'react';
import { FaCaretDown } from "react-icons/fa6";

const Faq = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section id='faq' className='flex flex-col gap-5 justify-between items-center text-center mt-5'>
      <div className='flex flex-col gap-5 justify-between items-center w-full '>
        <div className='w-full lg:w-[50%]'>
          <button
            onClick={() => toggleDropdown(0)}
            className='rounded-full w-full bg-[#5e5e5e] opacity-20 text-white py-2 px-2 text-sm flex items-center justify-center gap-2 lg:text-base'
          >
            <span className='opacity-100'>Дизайн - проект</span> <FaCaretDown />
          </button>
          {openDropdown === 0 && (
            <div className="text-black p-2 pl-4 mt-2 rounded-xl transition-all duration-300 text-sm flex flex-col gap-4 text-left">
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>01.</span> Сбор информации,обсуждение предпочтений, бюджета и сроков.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>02.</span> Исследование объекта: Замеры, фотографии, изучение технических характеристик помещения.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>03.</span> Создание планировочных решений и размещение мебели.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>04.</span> Дизайн всех помещений в фотореалестичных 3Д визуализациях.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>05.</span> Полный пакет чертежей для строителей, чертежи мебели индивидуальной разработки.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>06.</span> Печатная версия проекта в 2х экземплярах.</p>
            </div>
          )}
        </div>

        <div className='w-full lg:w-[50%]'>
          <button
            onClick={() => toggleDropdown(1)}
            className='rounded-full w-full bg-[#5e5e5e] opacity-20 text-white py-2 px-2 text-sm flex items-center justify-center gap-2 lg:text-base'
          >
            <span>Авторское сопровождение</span> <FaCaretDown />
          </button>
          {openDropdown === 1 && (
            <div className="text-black p-2 pl-4 mt-2 rounded-xl transition-all duration-300 text-sm flex flex-col gap-4 text-left">
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>01.</span>Подбор строительной бригады.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>02.</span>Проверка выполнения строительных и отделочных работ в соответствии с проектной документацией.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>03.</span>Контроль качества используемых материалов и работ.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>04.</span>Внесение необходимых изменений в проектную документацию по ходу работ</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>05.</span>Регулярные визиты на объект для проверки этапов работ,финальная приемка выполненных работ и проверка на соответствие проекту.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>06.</span>Оперативное реагирование на любые изменения или непредвиденные ситуации на объекте.</p>
            </div>
          )}
        </div>

        <div className='w-full lg:w-[50%]'>
          <button
            onClick={() => toggleDropdown(2)}
            className='rounded-full w-full bg-[#5e5e5e] opacity-20 text-stone-50 py-2 px-2  text-sm flex items-center justify-center gap-2 lg:text-base'
          >
            <span className=''>Комплектация</span> <FaCaretDown />
          </button>
          {openDropdown === 2 && (
            <div className="text-black p-2 pl-4 mt-2 rounded-xl transition-all duration-300 text-sm flex flex-col gap-4 text-left">
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>01.</span>Организация процесса закупки.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>02.</span>Размещение заказов у поставщиков,организация доставки материалов и мебели на объект.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>03.</span>Подбор и согласование образцов отделочных материалов, мебели и декора.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>04.</span>Организация и контроль установки мебели и оборудования.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>05.</span>Решение возникающих задач в процессе реализации.</p>
              <p className='flex gap-2 border-b pb-2'><span className='text-sm'>06.</span>Окончательная проверка всех позиций на соответствие проекту.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
