// Components
import { Awards, Hero } from "@/components"
import HeroImg from "media/seoservicesHero.png"

export default function page() {
    return (
        <main>
            <Hero
                subTitle="Professional Search Engine Optimization Services"
                title="That Grow Traffic, <br  class='xs:hidden sm:hidden md:hidden lg:block'/> Increase Revenue"
                desc="Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out."
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss = "xs:text-[30px] sm:text-[35px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]"
                spaceBottom="pb-0"
                marqueeCss="pb-[40px]  xs:pt-[50px] sm:pt-[50px]"
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
            />
            <Awards />
        </main>
    )
}
