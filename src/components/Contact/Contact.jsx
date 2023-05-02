import React from 'react'
import { ContactTitle } from '../SectionTitle/SectionTitle'
import { CheckboxField, InputFieldDefault, SelectField, TextareaField } from '../InputField/InputField'
import { ButtonPrimary } from '../Buttons/Buttons'

const Contact = () => {
    const selectFieldData = ["Web Design", "Gradient Design", "App Development", "Full Stack Development"]
    return (
        <section id="contact" className='section-padding bg-white'>

            <div className="site-container">
                <div className="contact-wrapper flex flex-col items-center justify-center gap-[64px] 3xl:gap-[64px]">
                    <ContactTitle text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "} mainTitle={"Contact me"} subtitle={"Get In Touch"} />
                    <form action="" className='3xl:w-[1024px] md:w-[768px] sm:px-8 md:px-0 w-full flex flex-col gap-4 md:gap-6 3xl:gap-8'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 3xl:gap-8 ">
                            <InputFieldDefault lebel="first name" type="text" />
                            <InputFieldDefault lebel="last name" type="text" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 3xl:gap-8">
                            <InputFieldDefault lebel="email" type="email" />
                            <InputFieldDefault lebel="phone number" type="number" />
                        </div>
                        <div className="grid grid-cols-1">
                            <SelectField lebel="Choose a topic" data={selectFieldData} />
                        </div>
                        <div className="grid grid-cols-1">
                            <TextareaField lebel="Message" placeholder={"Type your message..."} />
                        </div>
                        <div className="grid grid-cols-1">
                            <CheckboxField lebel={"I accept the terms"} />
                        </div>
                        <div className="flex justify-center">
                            <ButtonPrimary>Submit</ButtonPrimary>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact