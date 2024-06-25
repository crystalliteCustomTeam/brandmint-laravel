// Components
import { Awards, Hero } from "@/components"
// Media
import HeroImg from "media/localseoservicesHero.png"

export default function page() {
    return (
        <main>
            <Hero
                subTitle="Our Local SEO Services"
                title="Driving Qualified Traffic To Your Business!"
                desc="By harnessing the power of nationwide SEO, Jumpto1 creates digital solutions that challenge the highly-saturated marketplace and help you win new clients across the nation. Now you can target customers in every state, every region without the fear of any geographical confinement."
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss = "xs:text-[30px] sm:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px]"
                spaceBottom="pb-0"
                marqueeCss="pb-[80px] xs:pt-[50px] sm:pt-[50px]"
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
            />
            <Awards />
        </main>
    )
}
