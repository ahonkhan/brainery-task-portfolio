import React from 'react'
import { SectionTitleDefault } from '../SectionTitle/SectionTitle'
import { SkillCardDefault } from '../Cards/Card'
import Chain from "../../assets/My Skill/chain.png"
import Link from "../../assets/My Skill/link.png"
import featherPen from "../../assets/My Skill/feather-pen.png"
import Code from "../../assets/My Skill/code.png"

import CodeXl from "../../assets/My Skill/2xl/code.svg"
import ChainXl from "../../assets/My Skill/2xl/chain.svg"
import LinkXl from "../../assets/My Skill/2xl/link.svg"
import featherPenXl from "../../assets/My Skill/2xl/feather.svg"



const Skills = () => {
    return (
        <section id='skill' className='py-[84px] bg-white  md:py-[104px] xl:py-[124px]  2xl:py-[149.33px]'>
            <div className="site-container">
                <SectionTitleDefault mainTitle={"My Expertise"} subtitle={"My Skills"} />
                <div className="h-[48px] md:h-[70px] xl:h-[84px] 2xl:h-[106.67px]"></div>

                <div className="skill-cards grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 2xl:gap-[42.67px]">
                    <SkillCardDefault status="active" lgIcon={ChainXl} icon={Chain} title={"Strategy & Direction"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."} />
                    <SkillCardDefault icon={Link} lgIcon={LinkXl} title={"Branding & Logo"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."} />
                    <SkillCardDefault icon={featherPen} lgIcon={featherPenXl} title={"UI & UX Design"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."} />
                    <SkillCardDefault icon={Code} lgIcon={CodeXl} title={"Webflow Development"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."} />
                </div>
            </div>
        </section>
    )
}

export default Skills