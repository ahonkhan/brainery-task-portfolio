import React, { useContext } from 'react'
import { MdClose } from "react-icons/md"
import { GetContext } from '../../context/Context'
const Sidebar = () => {
    const context = useContext(GetContext)
    return (
        <div className={`${context.sidebarStatus ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-300 sidebar-wrapper md:hidden w-full z-[9999] fixed top-0 left-0 bg-black bg-opacity-40 h-screen`}>
            <div className={`sidebar ${context.sidebarStatus ? '' : '-translate-x-[120%]'} duration-300 max-w-[300px] flex flex-col justify-between w-[75vw] bg-Primary h-full shadow-md p-[20px]`}>
                <div className="sidebar-header shrink-0">
                    <button onClick={() => context.setSidebarStatus(false)}> <MdClose className='text-Shade text-[28px]' /> </button>
                </div>
                <div className="items-start h-full flex flex-col justify-between">
                    <ul className='sidebar-menu   flex flex-col gap-4 pt-[32px] uppercase text-lg text-Shade'>
                        <li className='border-b-[1.5px] w-fit pr-[20px]'>
                            <a href="#home">Home</a>
                        </li>
                        <li className='border-b-[1.5px] w-fit pr-[20px]'>
                            <a href="#about">About me</a>
                        </li>
                        <li className='border-b-[1.5px] w-fit pr-[20px]'>
                            <a href="#home">Skills</a>
                        </li>
                        <li className='border-b-[1.5px] w-fit pr-[20px]'>
                            <a href="#home">Testimonial</a>
                        </li>
                        <li className='border-b-[1.5px] w-fit pr-[20px]'>
                            <a href="#home">Dribble</a>
                        </li>

                    </ul>

                    <a href="#contact" className='w-full'>
                        <button className='bg-rose-500 rounded-md text-Shade text-lg py-2 w-full'>Contact Me</button>

                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar