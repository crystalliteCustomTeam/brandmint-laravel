// Components
import { Awards, Hero } from "@/components"
// Media
import HeroImg from "media/whitelableHero.png"

export default function page() {
    return (
        <main>
            <Hero
                subTitle="White Label SEO Services"
                title="Premium White Label SEO Services Serving Over 250 Different Digital Marketing Companies All Across United States"
                desc="At Jump To 1, we like to create strategic partnerships with like-minded digital marketing companies that focus on providing quality marketing solutions while maintaining profits. We enable digital agencies worldwide to make big bucks while we do the hard work."
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss = "xs:text-[30px] sm:text-[25px] lg:text-[30px] xl:text-[50px] 2xl:text-[50px]"
                spaceBottom="pb-0"
                marqueeCss="pb-[80px] pt-[90px] xs:pt-[50px] sm:pt-[90px]"
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
                gridleft="col-span-12 lg:col-span-7"
                gridright="col-span-12 lg:col-span-5"
            />
            <Awards />
        </main>
    )
}
