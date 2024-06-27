"use client"
// Components
import { Awards, Hero, Process } from "@/components"
// Media
import heroImg from 'media/webDevelopmentImg.png'
import { useEffect, useState } from "react"

export default function Page() {
    const [marqueeTheme, setMarqueeTheme] = useState('dark')
    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth < 992) {
                setMarqueeTheme("light")
            }else{
                setMarqueeTheme("dark")

            }
        };
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => {
            window.removeEventListener("resize", checkMobile)
        }
    }, [])
    return (
        <main>
            <Hero
                subTitle="# 1 Website Design Agency"
                title="We Don't Just Build Websites, We Design Websites That Sell!"
                desc="As the top-rated and internationally identified marketing agency, Jumpto1 serves as an intelligent approach to enjoying explosive REVENUE and scalable GROWTH. We pave the path for your business excellence with custom-fit websites featuring user-friendliness, fluid navigation, and laser-target speed."
                img={heroImg}
                spaceBottom="pb-[50px] lg:pb-[100px]"
                imgCss="absolute bottom-0 lg:bottom-[-80px] right-0 -z-10 max-w-[57%] xl:max-w-[55%] 2xl:max-w-full opacity-15 lg:opacity-100"
                titleCss="xs:text-[30px] text-[45px] md:text-[35px] lg:text-[40px] xl:text-[55px] 2xl:text-[65px]"
                marqueeTheme={marqueeTheme}
            />
            <Awards />
            <div className="xs:py-[50px] py-[90px] bg-[url('/bg-gradient.png')] bg-cover bg-center bg-no-repeat">
                <Process />
            </div>
        </main>
    )
}
