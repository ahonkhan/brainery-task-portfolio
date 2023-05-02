import React from 'react'
import aboutlg from "../../assets/About/about-lg.png"
import aboutsm from "../../assets/About/about-sm.png"
import { SectionTitleDefault } from '../SectionTitle/SectionTitle'
import style from "./about.module.scss"
const About = () => {
    return (
        <section id='about' className='py-[64px] md:py-[84.55px] xl:py-[100px] 3xl:py-[133.33px] bg-white'>

            <div className="site-container">
                <div className={`${style.aboutWraper} flex flex-col md:flex-row text-center md:text-start items-center gap-[80px] xl:gap-[100px] 3xl:gap-[114.67px]`}>
                    <div className={`${style.aboutImg}`}>
                        <img src={aboutsm} className='md:hidden' alt="" />
                        <img src={aboutlg} className='hidden md:block' alt="" />
                    </div>
                    <div className={`${style.aboutContent} md:w-[333px] lg:w-[450px] xl:w-[600px] 2xl:w-[700px] 3xl:w-[821.33px] shrink-0`}>
                        <SectionTitleDefault mainTitle={"About"} subtitle={"About Me"} />
                        <div className="h-8"></div>
                        <p className={`${style.aboutText} text-[15px] xl:text-[18px] 3xl:text-[24px]`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                            <br /><br />
                            Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About