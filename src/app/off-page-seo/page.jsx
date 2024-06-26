// Components
import { Awards, Hero } from "@/components"
// Media
import HeroImg from "media/offpageseoHero.png"

export default function Page() {
    return (
        <main>
            <Hero
                subTitle="Professional Offline Off page SEO"
                title="Services That Grow Traffic And Increase Revenue"
                desc="Jump To 1 is the best SEO service provider that guarantees your Website gains more Sales , more Traffic, and maximizes your return on investment. Whether your target market is Local SEO or Nationwide SEO, we have got you covered. Call us now, and let one of our SEO specialist help your website Jump To 1."
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss = "xs:text-[30px] sm:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px]"
                spaceBottom="pb-0"
                marqueeCss="pb-[80px] pt-[50px] xs:pt-[50px] sm:pt-[80px]"
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
            />
            <Awards />
        </main>
    )
}
