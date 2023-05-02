import React from 'react'
import { ButtonFillPrimary } from '../Buttons/Buttons'
import style from "./header.module.scss"
import headerImg from "../../assets/Header/header-img.png"
const Hero = () => {
    return (
        <section id='home' className='py-[40px]  md:py-[84px] xl:py-[104px] 2xl:py-[133px]'>
            <div className="site-container">
                <div className={`${style.headerWrapper}  md:items-center 2xl:items-start justify-start flex flex-col gap-7  md:gap-1 xl:gap-0 md:flex-row  text-center md:text-start`}>
                    <div className={`${style.headerLeft}   2xl:mt-[123.54px]  3xl:mt-[143.54px] w-full lg:w-[550px] xl:w-[600px]  3xl:w-[790.67px] 3xl:h-[442.67px] flex flex-col gap-7 3xl:gap-[53.33px] md:items-start items-center`}>
                        <div className={`${style.content} flex flex-col  gap-5 md:gap-4 2xl:gap-6 3xl:gap-8 items-center md:items-start`}>
                            <p className={`${style.subtitle}`}>Hey, I am John</p>
                            <h1 className={`${style.mainTitle}`}>I create <span className='text-Primary'>product design</span> and brand experience</h1>
                            <p className={`${style.overview}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

                        </div>
                        <div className={`${style.action}`}>
                            <a href="#">
                                <ButtonFillPrimary>Get In Touch</ButtonFillPrimary>
                            </a>
                        </div>
                    </div>
                    <div className={`${style.headerImg} flex items-center lg:justify-start lg:items-start w-full md:h-[400px] lg:h-[500px] lg:w-[600px] xl:h-[550px] xl:w-[700px]  2xl:w-[750px] 2xl:h-[629.74px] 3xl:w-[917.33px] 3xl:h-[729.74px] lg:shrink-0`}>
                        <img src={headerImg} className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero