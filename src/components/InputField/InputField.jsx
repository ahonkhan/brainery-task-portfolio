import React, { useState } from 'react'
import style from "./inputfield.module.scss"
import { BiChevronDown } from "react-icons/bi"
export const InputFieldDefault = ({ lebel, type }) => {
    return (
        <div className={`${style.inputDefault} flex flex-col gap-[10.67px]`}>
            <p className='3xl:text-[21.3333px] xl:text-[17px] text-[14px] capitalize'>{lebel}</p>
            <input required type={type} className='w-full h-[44px] md:h-[50px] 3xl:h-[64px]' />
        </div>
    )
}
export const SelectField = ({ lebel, data }) => {
    const [selectStatus, setSelectStatus] = useState(false)
    const [activeData, setActiveData] = useState('Select one...')
    return (
        <div onClick={() => setSelectStatus(!selectStatus)} className={`${style.selectDefault} relative flex flex-col gap-[10.67px]`}>
            <p className='3xl:text-[21.3333px] xl:text-[17px] text-[14px] capitalize'>{lebel}</p>
            <button type='button' className='w-full h-[44px] md:h-[50px] text-Heading 3xl:h-[64px] flex items-center justify-between'>
                <span >{activeData}</span>
                <span> <BiChevronDown className={`${selectStatus ? 'rotate-180' : ''} duration-300 text-[24px] 3xl:text-[32px]`} />
                </span>
            </button>
            <div className={` ${selectStatus ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-300 absolute top-full w-full z-20`}>
                <ul className={`${style.selectOptionWrapper}  bg-slate-400 overflow-y-auto w-full h-[200px]  shadow  rounded`}>
                    {
                        data?.map(item =>
                            <li onClick={() => setActiveData(item)} className={`${style.selectOption} px-6 py-3 bg-slate-400 cursor-pointer border-b border-slate-300 duration-200 hover:bg-slate-600 text-white`}>{item}</li>

                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export const TextareaField = ({ lebel, placeholder }) => {
    return (
        <div className={`${style.textareaDefault} relative flex flex-col gap-[10.67px]`}>
            <p className='3xl:text-[21.3333px] xl:text-[17px] capitalize'>{lebel}</p>
            <textarea name="" className='placeholder:text-sm md:text-base text-[14px] md:min-h-[160px] 3xl:min-h-[240px] capitalize font-normal' placeholder={placeholder}></textarea>
        </div>
    )
}
export const CheckboxField = ({ lebel }) => {
    const [active, setActive] = useState(false)
    return (
        <div className={`${style.checkboxFieldDefault}  flex items-center flex-row gap-[10.67px]`}>
            <button onClick={() => setActive(!active)} type='button' className={`${style.checkboxBtn} ${active ? style.checkboxActive : ''} relative h-[18px] cursor-pointer  w-[18px] rounded-[3px] 2xl:rounded-[5.33333px] 2xl:h-[21.33px] 2xl:w-[21.33px] `}>
            </button>
            <p className='text-[17px] 3xl:text-[18.6667px]'>{lebel}</p>
        </div >
    )
}

