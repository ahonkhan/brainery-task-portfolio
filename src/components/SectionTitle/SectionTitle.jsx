import React from 'react'
import style from "./sectiontitle.module.scss";
export const SectionTitleDefault = ({ mainTitle, subtitle }) => {
    return (
        <div className={`${style.sectionTitleDefault} text-center md:text-start text-Heading`}>
            <p className='text-[15px] xl:text-[17px] 2xl:text-[21.3333px]'>{subtitle}</p>
            <div className="md:h-[10px] 2xl:h-[21.33px]"></div>
            <h1 className='text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] 2xl:text-[64px]'>{mainTitle}</h1>
        </div>
    )
}

