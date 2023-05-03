import React from 'react'
import logoLg from "../../assets/Navbar/logo-lg.png"
import logoMd from "../../assets/Navbar/logo-md.svg"
import facebook from "../../assets/Footer/fb.svg"
import insta from "../../assets/Footer/insta.svg"
import linkedin from "../../assets/Footer/Linkedin.svg"
import twitter from "../../assets/Footer/Twitter.svg"
import style from "./footer.module.scss"
import { Link } from 'react-router-dom'
const FooterSection = () => {
    return (
        <footer className='pt-[80px] pb-[40px] md:py-[80px] 3xl:py-[106.67px]'>
            <div className="site-container">
                <div className={`${style.FooterTop} `}>
                    <div className="flex md:items-center flex-col md:flex-row md:justify-between gap-4">
                        <div className="nav__logo md:w-[417px] 3xl:w-[556px]">
                            <Link to="">
                                <img className='hidden 2xl:block' src={logoLg} alt="" />
                                <img className='2xl:hidden' src={logoMd} alt="" />
                            </Link>
                        </div>
                        <ul className={`${style.navMenu} flex shrink-0 items-center gap-[32px] 3xl:gap-[42.67px]`}>
                            <li className={`${style.navList}`}>
                                <a href='#home' className={`${style.navLink}`}>Home</a>
                            </li>

                            <li className={`${style.navList}`}>
                                <a href='#portfolio' className={`${style.navLink}`}>Portfolio</a>
                            </li>

                            <li className={`${style.navList}`}>
                                <a href='#about' className={`${style.navLink}`}>About Me</a>
                            </li>

                            <li className={`${style.navList}`}>
                                <a href='#testimonial' className={`${style.navLink}`}>Testimonial</a>
                            </li>
                        </ul>
                        <div className="flex md:justify-end items-center gap-3 md:gap-5 nav__button md:w-[368px] 2xl:w-[490.67px]">
                            <a href="#">
                                <img className='2xl:w-[32px]' src={facebook} alt="" />
                            </a>
                            <a href="#">
                                <img className='2xl:w-[32px]' src={insta} alt="" />
                            </a>
                            <a href="#">
                                <img className='2xl:w-[32px]' src={twitter} alt="" />
                            </a>
                            <a href="#">
                                <img className='2xl:w-[32px]' src={linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="h-[24px] md:h-[80px] 3xl:h-[106.67px]"></div>
                <div className={`${style.divider}`}></div>
                <div className={`${style.FooterBottom} sm:h-[34px] md:h-[54px] 3xl:h-[72px] sm:flex sm:justify-end sm:items-end`}>
                    <ul className='flex sm:justify-end pt-[18px] flex-wrap sm:pt-0 text-[14px] gap-2 sm:gap-6 3xl:gap-8 3xl:text-[18.6667px]'>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookies Settings</a></li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default FooterSection