import React from 'react'
import style from "./buttons.module.scss"
export const ButtonOutlinePrimary = ({ children }) => {
    return (
        <button className={`${style.btnOutlinePrimary} hover:bg-Primary hover:text-white duration-300 font-Roboto text-Primary border-Primary`}>{children}</button>
    )
}
export const ButtonFillPrimary = ({ children }) => {
    return (
        <button className={`${style.btnOutlinePrimary} hover:bg-transparent bg-Primary text-white duration-300 font-Roboto hover:text-Primary border-Primary`}>{children}</button>
    )
}
export const ButtonPrimary = ({ children }) => {
    return (
        <button className={`${style.btnPrimary}  bg-Primary text-white  font-Roboto border-Primary`}>{children}</button>
    )
}

export const SocialBtn = ({ children }) => {
    return (
        <button className={`${style.SocialBtn}`}>{children}</button>
    )
}


