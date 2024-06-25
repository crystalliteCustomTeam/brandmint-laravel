// Components
import { Awards, Hero } from "@/components"
// Media
import HeroImg from "media/googleservicesHero.png"

export default function page() {
    return (
        <main>
            <Hero
                subTitle="Google Services"
                title="Get Sales-Ready Leads and Enjoy Quantifiable Results with Our Google Local Services"
                desc="Don’t you want your Google My Business listing to outrank your competitors? Our GMB listing optimization services have got you covered. If you have a GMB listing but are witnessing no noticeable results, we are here to give your profile the boost it deserves. "
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss = "xs:text-[30px] sm:text-[30px] lg:text-[38px] xl:text-[45px] 2xl:text-[50px]"
                spaceBottom="pb-0"
                marqueeCss="py-[80px] md:pb-[100px] "
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
            />
            <Awards />
        </main>
    )
}
