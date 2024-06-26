// Components
import { Awards, Hero } from "@/components"
// Media
import HeroImg from "media/onpageseoHero.png"

export default function Page() {
    return (
        <main>
            <Hero
                subTitle="On Page SEO Services"
                title="The practice of optimizing your website to help your web pages rank higher on Google!"
                desc="On page SEO refers to the marketing measures taken by marketers to optimize individual web pages, including URLs and HTML. On page SEO is the basis of all SEO success. By adjusting the on-page elements, you can increase your chances of ranking for targeted keywords, generating more organic traffic, and making your site more friendly to users and search engine algorithms."
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss = "xs:text-[30px] sm:text-[35px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px]"
                spaceBottom="pb-0"
                marqueeCss="pb-[80px] pt-[50px] xs:pt-[50px] sm:pt-[80px]"
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
            />
            <Awards />
        </main>
    )
}
