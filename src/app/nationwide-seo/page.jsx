// Components
import { Awards, Hero } from "@/components"
// Media
import HeroImg from "media/nationwideseoHero.png"

export default function page() {
    return (
        <main>
            <Hero
                subTitle="Nationwide SEO Services"
                title="Mind-Blowing Nationwide SEO Services To Help You Blow Out Your Competition!"
                desc="Local SEO is always a smart move to help your business acquire qualified leads and convert them into sales. So, what’s stopping you from getting BIGGER and VISIBLE? Now every “business near me” query will bring your company in front of the ideal customers. Have our top-leading local SEO Company on your side, and let us combat the digital marketing tides."
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss = "xs:text-[30px] sm:text-[35px] lg:text-[30px] xl:text-[42px] 2xl:text-[55px]"
                spaceBottom="pb-0"
                marqueeCss="pb-[80px] pt-[50px] "
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
                gridleft="col-span-12 lg:col-span-8"
                gridright="col-span-12 md:col-span-4"
            />
            <Awards />
        </main>
    )
}
