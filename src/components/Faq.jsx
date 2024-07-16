import { useState } from 'react';
import { FaCaretDown } from "react-icons/fa6";

const Faq = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section id='faq' className='flex flex-col gap-5 justify-between items-center text-center mt-5'>
      <h2 className='text-xl font-light tracking-wide'>ДОБРО ПОЖАЛОВАТЬ В СТУДИЮ MOSSO</h2>
      <div className='flex flex-col gap-5 justify-between items-center w-full'>
        <div className='w-full'>
          <button
            onClick={() => toggleDropdown(0)}
            className='rounded-xl w-full bg-[#747373] text-white py-2 px-2 text-sm flex items-center justify-center gap-2'
          >
            <span>Дизайн - проект</span> <FaCaretDown />
          </button>
          {openDropdown === 0 && (
            <div className="bg-black text-white p-4 mt-2 rounded-xl transition-all duration-300 text-sm flex flex-col gap-4">
              <p>01) Сбор информации,обсуждение предпочтений, бюджета и сроков.</p>
              <p>02) Исследование объекта: Замеры, фотографии, изучение технических характеристик помещения.</p>
              <p>03) Создание планировочных решений и размещение мебели.</p>
              <p>04) Дизайн всех помещений в фотореалестичных 3Д визуализациях.</p>
              <p>05) Полный пакет чертежей для строителей, чертежи мебели индивидуальной разработки.</p>
              <p>06) Печатная версия проекта в 2х экземплярах.</p>
            </div>
          )}
        </div>
        
        <div className='w-full'>
          <button
            onClick={() => toggleDropdown(1)}
            className='rounded-xl w-full bg-[#747373] text-white py-2 px-2 text-sm flex items-center justify-center gap-2'
          >
            <span>Авторское сопровождение</span> <FaCaretDown />
          </button>
          {openDropdown === 1 && (
            <div className="bg-black text-white p-4 mt-2 rounded-xl transition-all duration-300 text-sm flex flex-col gap-4">
              <p>01) Подбор строительной бригады </p>
              <p>02) Проверка выполнения строительных и отделочных работ в соответствии с проектной документацией.</p>
              <p>03) Контроль качества используемых материалов и работ.</p>
              <p>04) Внесение необходимых изменений в проектную документацию по ходу работ</p>
              <p>05) Регулярные визиты на объект для проверки этапов работ,финальная приемка выполненных работ и проверка на соответствие проекту.</p>
              <p>06) Оперативное реагирование на любые изменения или непредвиденные ситуации на объекте.</p>
            </div>
          )}
        </div>

        <div className='w-full'>
          <button
            onClick={() => toggleDropdown(2)}
            className='rounded-xl w-full bg-[#747373] text-white py-2 px-2 text-sm flex items-center justify-center gap-2'
          >
            <span>Комплектация</span> <FaCaretDown />
          </button>
          {openDropdown === 2 && (
            <div className="bg-black text-white p-4 mt-2 rounded-xl transition-all duration-300 text-sm flex flex-col gap-4 ">
              <p>01) Организация процесса закупки </p>
              <p>02) Размещение заказов у поставщиков,организация доставки материалов и мебели на объект</p>
              <p>03) Подбор и согласование образцов отделочных материалов, мебели и декора.</p>
              <p>04) Организация и контроль установки мебели и оборудования.</p>
              <p>05) Решение возникающих задач в процессе реализации </p>
              <p>06) Окончательная проверка всех позиций на соответствие проекту.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
