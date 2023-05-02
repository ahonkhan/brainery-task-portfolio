import React from 'react'
import { SectionTitleStart } from '../SectionTitle/SectionTitle'
import { SocialBtn } from '../Buttons/Buttons'
import icon from "../../assets/Blog/dribble.svg"
import image1 from "../../assets/Blog/placeholder-lg/Image.png"
import image2 from "../../assets/Blog/placeholder-lg/Image-1.png"
import image3 from "../../assets/Blog/placeholder-lg/Image-2.png"

import { PortfolioCard } from '../Cards/Card'
const Blog = () => {
    return (
        <section id='portfolio' className='3xl:py-[149.333px] bg-white 2xl:py-[120px] xl:py-[100px] md:py-[80px] py-[64px]'>
            <div className="site-container">
                <div className="portfolio-wrapper flex flex-col gap-[40px] xl:gap-[70px] 3xl:gap-[106.67px]">
                    <div className="portfolio-header text-center sm:text-start flex gap-4 flex-col sm:flex-row justify-center sm:justify-between items-center  md:items-center md:justify-between">
                        <SectionTitleStart mainTitle={"My Portfolio"} subtitle={"Recent Projects"} />
                        <SocialBtn>
                            <img src={icon} alt="" />
                            <span>Visit My Dribble</span>
                        </SocialBtn>
                    </div>
                    <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 3xl:gap-[42.67px]">
                        <PortfolioCard  img={image1} title={"Ahuse"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."} link={""} />
                        <PortfolioCard img={image2} title={"App Dashboard"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."} link={""} />
                        <PortfolioCard img={image3} title={"Easy Rent"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."} link={""} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog