import React, { useContext, useState } from 'react'
import logoLg from "../../assets/Navbar/logo-lg.png"
import logoMd from "../../assets/Navbar/logo-md.svg"
import { Link } from 'react-router-dom'
import { ButtonOutlinePrimary } from '../Buttons/Buttons'
import style from "./navbar.module.scss"
import { BiMenu } from "react-icons/bi"
import { GetContext } from '../../context/Context'
const Navbar = () => {
    const [fixedNavStatus, setFixedNavStatus] = useState(false)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            setFixedNavStatus(true)
        } else {
            setFixedNavStatus(false)
        }
    })

    const context = useContext(GetContext)
    return (
        <nav id='navbar' className={`${style.navBar} duration-300 w-full bg-white ${fixedNavStatus ? 'md:h-[70px] 3xl:h-[100px] py-[10px] md:py-[15px] 3xl:py-[25.33px] ' : "md:h-[90px] 3xl:h-[120px] py-[14px] md:py-[19px] 3xl:py-[25.33px] "}  sticky top-0 z-[999] left-0 flex items-center  `}>
            <div className="site-container w-full">
                <div className={`${style.navWrapper} lg:h-[52px] 3xl:h-[69.33px] flex items-center justify-between gap-[32px] 3xl:gap-[42.67px]`}>
                    <div className="nav__logo shrink-0">
                        <Link to="">
                            <img className='hidden 2xl:block' src={logoLg} alt="" />
                            <img className='2xl:hidden' src={logoMd} alt="" />
                        </Link>
                    </div>
                    <div className="nav-col hidden md:block  lg:w-[276px] 3xl:w-[368.67px]"></div>
                    <ul className={`${style.navMenu} hidden md:flex shrink-0 items-center gap-[32px] 3xl:gap-[42.67px]`}>
                        <li className={`${style.navList}`}>
                            <a href='#home' className={`${style.navLink} activeNav`}>Home</a>
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
                    <div className="nav-col lg:w-[276px] 3xl:w-[368.67px] hidden md:block"></div>
                    <div className="hidden md:block nav__button shrink-0">

                        <a href="#contact">
                            <ButtonOutlinePrimary>Contact Me</ButtonOutlinePrimary>
                        </a>
                    </div>
                    <div className="mobile-menubtn md:hidden">
                        <button onClick={()=>context.setSidebarStatus(true)}> <BiMenu className='text-[28px] text-Heading' /> </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar