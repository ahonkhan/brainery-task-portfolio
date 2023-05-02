import React from 'react'
import style from "./sectiontitle.module.scss";
export const SectionTitleDefault = ({ mainTitle, subtitle }) => {
    return (
        <div className={`${style.sectionTitleDefault} text-center md:text-start text-Heading`}>
            <p className='text-[15px] xl:text-[17px] 3xl:text-[21.3333px]'>{subtitle}</p>
            <div className="md:h-[10px] 3xl:h-[21.33px]"></div>
            <h1 className='text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] 3xl:text-[64px]'>{mainTitle}</h1>
        </div>
    )
}

export const SectionTitleStart = ({ mainTitle, subtitle }) => {
    return (
        <div className={`${style.sectionTitleDefault}  text-Heading`}>
            <p className='text-[15px] xl:text-[17px] 3xl:text-[21.3333px]'>{subtitle}</p>
            <div className="md:h-[10px] 3xl:h-[21.33px]"></div>
            <h1 className='text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] 3xl:text-[64px]'>{mainTitle}</h1>
        </div>
    )
}

export const ContactTitle = ({ mainTitle, subtitle, text }) => {
    return (
        <div className={`${style.contactTitle}  text-center text-Heading`}>
            <p className='text-[15px] xl:text-[17px] font-bold 3xl:text-[21.3333px]'>{subtitle}</p>
            <div className="h-2 md:h-[10px] 3xl:h-[21.33px]"></div>
            <h1 className='text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] 3xl:text-[64px]'>{mainTitle}</h1>
            <div className="h-2 md:h-[16px] 3xl:h-[32px]"></div>
            <p className='px-8 md:px-0 text-[15px] font-medium xl:text-[17px] 3xl:text-[21.3333px]'>{text}</p>
        </div>
    )
}

