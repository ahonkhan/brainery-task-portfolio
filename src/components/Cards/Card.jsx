import React from 'react'
import style from "./card.module.scss"
export const SkillCardDefault = ({ icon, title, text, status, lgIcon }) => {
    return (
        <div className={`${style.SkillCardDefault} ${status === "active" ? style.active : ""} bg-Shade flex flex-col p-8`}>
            <div className={`${style.cardImg} p-[13px] w-fit 2xl:w-[80px] 2xl:h-[80px]`}>
                <img className='w-full hidden 2xl:block' src={lgIcon} alt="" />
                <img className='w-full 2xl:hidden' src={icon} alt="" />
            </div>
            <div className="h-[26.33px]"></div>
            <h3 className={`${style.cardTitle} text-[22px] 2xl:text-[32px]`} >{title}</h3>
            <div className="h-5"></div>
            <p className={`${style.cardText} text-[16px] 2xl:text-[21.3333px]`}>
                {text}
            </p>
        </div>
    )
}

