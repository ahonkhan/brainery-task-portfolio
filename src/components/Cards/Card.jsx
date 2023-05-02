import React from 'react'
import style from "./card.module.scss"
import iconPortfolioCard from "../../assets/Blog/iconarrow-top.svg"
import star from "../../assets/Testimonial/star.svg"
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
            <img src={img} alt="" />
            <div className={`${style.cardContent} flex flex-col gap-4 2xl:gap-8 px-5 xl:px-8 py-8 3xl:px-8`}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={link} target='_blank' className='flex items-center gap-4'> <span>View In Dribbble</span> <img src={iconPortfolioCard} alt="" /> </a>
            </div>
        </div>
    )
}

export const TestimonialCard = ({ review, profile, name, position, reviewStarCount }) => {
    return (
        <div className={`${style.testimonialCard} p-6 gap-6 xl:gap-8 xl:p-8 3xl:p-[42.6667px] 3xl:gap-[42.67px]`}>
            <div className={`${style.stars} gap-1`}>
                {
                    [...new Array(reviewStarCount)].map(item => <img className='w-5 3xl:w-auto' src={star} alt="" />
                    )
                }
            </div>
            <p className={`${style.reviewText} text-[15px] xl:text-[16px] 3xl:text-[21.3333px]`}>"{review}</p>
            <div className={`${style.cardFooter} gap-3 3xl:gap-[21.33px]`}>
                <div className={`${style.cardProfile}`}>
                    <img className='w-[36px] h-[36px] 3xl:w-[74.67px] 3xl:h-[74.67px] rounded-full' src={profile} alt="" />
                </div>
                <div className={`${style.cardContent} text-[14px] 3xl:text-[21.3333px]`}>
                    <p className={`${style.username}`}>{name}</p>
                    <p className={`${style.position}`}>{position}</p>
                </div>
            </div>
        </div>
    )
}

