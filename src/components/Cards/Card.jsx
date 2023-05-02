import React from 'react'
import style from "./card.module.scss"
import iconPortfolioCard from "../../assets/Blog/iconarrow-top.svg"
export const SkillCardDefault = ({ icon, title, text, status, lgIcon }) => {
    return (
        <div className={`${style.SkillCardDefault} ${status === "active" ? style.active : ""} bg-Shade flex flex-col p-8`}>
            <div className={`${style.cardImg} p-[13px] w-fit 3xl:w-[80px] 3xl:h-[80px]`}>
                <img className='w-full hidden 3xl:block' src={lgIcon} alt="" />
                <img className='w-full 3xl:hidden' src={icon} alt="" />
            </div>
            <div className="h-[26.33px]"></div>
            <h3 className={`${style.cardTitle} text-[22px] 3xl:text-[32px]`} >{title}</h3>
            <div className="h-5"></div>
            <p className={`${style.cardText} text-[16px] 3xl:text-[21.3333px]`}>
                {text}
            </p>
        </div>
    )
}
export const PortfolioCard = ({ img, title, text, link }) => {
    return (
        <div className={`${style.portfolioCard}`}>
            <img src={img}  alt="" />
            <div className={`${style.cardContent} flex flex-col gap-4 2xl:gap-8 px-5 xl:px-8 py-8 3xl:px-8`}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={link} target='_blank' className='flex items-center gap-4'> <span>View In Dribbble</span> <img src={iconPortfolioCard} alt="" /> </a>
            </div>
        </div>
    )
}

