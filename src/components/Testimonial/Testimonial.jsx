import React from 'react'
import { SectionTitleStart } from '../SectionTitle/SectionTitle'
import { TestimonialCard } from '../Cards/Card'
import Avatar1 from "../../assets/Testimonial/avatar1.png"
import Avatar2 from "../../assets/Testimonial/avatar2.png"
import Avatar3 from "../../assets/Testimonial/avatar3.png"


const Testimonial = () => {

    const testominialData = [
        { avatar: Avatar1, reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.", avatarName: "Dianne Russell", avatarPosition: "Starbucks", rating: 5 },
        { avatar: Avatar2, reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.", avatarName: "Kristin Watson", avatarPosition: "Louis Vuitton", rating: 5 },
        { avatar: Avatar3, reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.", avatarName: "Kathryn Murphy", avatarPosition: "McDonald's", rating: 5 },
    ]
    return (
        <section id='testimonial' className='section-padding bg-Shade'>
            <div className="site-container">
                <div className="portfolio-wrapper flex flex-col gap-[40px] xl:gap-[70px] 3xl:gap-[106.67px]">
                    <div className="portfolio-header text-center sm:text-start flex gap-4 flex-col sm:flex-row justify-center sm:justify-between items-center  md:items-center md:justify-between">
                        <SectionTitleStart mainTitle={"Customer testimonials"} subtitle={"Clients Feedback"} />

                    </div>
                    <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 3xl:gap-[42.67px]">
                      
                            {
                                testominialData.map(item =>
                                    <TestimonialCard profile={item.avatar} review={item.reviewText} reviewStarCount={item.rating} name={item.avatarName} position={item.avatarPosition}/>
                                )
                            }
                       

                    </div>
                </div>
            </div>
        </section>)
}

export default Testimonial