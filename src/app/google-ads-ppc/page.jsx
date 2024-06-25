// Components
import { Awards, Hero } from "@/components"
// Media
import HeroImg from "media/googleAdsHero.png"

export default function page() {
    return (
        <main>
            <Hero
                subTitle="# Pay Per Click Agency"
                title="We Don't Run Ads. We Grow Businesses."
                desc="With a keen eye on your bottom line, Solutions 8 uses precise targeting and advanced optimizations to ensure your ads do more than just reach—they multiply, return, and grow your business."
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss = "xs:text-[30px] sm:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px]"
                spaceBottom="pb-0"
                marqueeCss="py-[80px] md:pb-[100px] "
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
            />
            <Awards />
        </main>
    )
}
