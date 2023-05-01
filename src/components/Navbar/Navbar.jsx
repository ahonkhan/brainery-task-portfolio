import React from 'react'
import logoLg from "../../assets/Navbar/logo-lg.png"
import logoMd from "../../assets/Navbar/logo-md.svg"
import { Link } from 'react-router-dom'
import { ButtonOutlinePrimary } from '../Buttons/Buttons'
import style from "./navbar.module.scss"
import { BiMenu } from "react-icons/bi"
const Navbar = () => {
    return (
        <nav id='navbar' className={`${style.navBar} bg-white  md:h-[90px] 2xl:h-[120px] py-[14px] md:py-[19px] 2xl:py-[25.33px] `}>
            <div className="site-container">
                <div className={`${style.navWrapper} lg:h-[52px] 2xl:h-[69.33px] flex items-center justify-between gap-[32px] 2xl:gap-[42.67px]`}>
                    <div className="nav__logo shrink-0">
                        <Link to="">
                            <img className='hidden 2xl:block' src={logoLg} alt="" />
                            <img className='2xl:hidden' src={logoMd} alt="" />
                        </Link>
                    </div>
                    <div className="nav-col hidden md:block  lg:w-[276px] 2xl:w-[368.67px]"></div>
                    <ul className={`${style.navMenu} hidden md:flex shrink-0 items-center gap-[32px] 2xl:gap-[42.67px]`}>
                        <li className={`${style.navList}`}>
                            <a href='#navbar' className={`${style.navLink} activeNav`}>Home</a>
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
                    <div className="nav-col lg:w-[276px] 2xl:w-[368.67px] hidden md:block"></div>
                    <div className="hidden md:block nav__button shrink-0">

                        <a href="#contact">
                            <ButtonOutlinePrimary>Contact Me</ButtonOutlinePrimary>
                        </a>
                    </div>
                    <div className="mobile-menubtn md:hidden">
                        <button> <BiMenu className='text-[28px] text-Heading' /> </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar