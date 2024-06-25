// Components
import { Awards, Hero } from "@/components"
// Media
import HeroImg from "media/about-us.png"

export default function page() {
    return (
        <main>
            <Hero
                subTitle="About Us"
                title="Internet Marketing Expertise That Brings Quantifiable Results"
                desc="Our Multifaceted Digital Marketing Solutions Helps Business Succeed and Make an Impact on the Digital Realm"
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss = "xs:text-[25px] sm:text-[35px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px]"
                spaceBottom="pb-0"
                marqueeCss="pb-[80px] pt-[90px] xs:pt-[50px] sm:pt-[90px]"
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
                gridleft="col-span-12 lg:col-span-8"
                gridright="col-span-12 lg:col-span-4"
            />
            <Awards />
        </main>
    )
}
