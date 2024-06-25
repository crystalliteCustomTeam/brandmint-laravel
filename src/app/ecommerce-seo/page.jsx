// Components
import { Awards, Hero } from "@/components"
import HeroImg from "media/ecommerceHero.png"
export default function page() {
    return (
        <main>
            <Hero
                subTitle="Our eCommerce SEO Services"
                title="Driving Qualified Traffic To Your Online Store!"
                desc="We provide eCommerce website marketing strategies aimed at helping companies supercharge their online campaigns and attract more buyers. Partner with Jumpto1 and let us help you drive in more revenue to your eCommerce store. The more keywords you’re able to target successfully, the more qualified buyers will click on your products, and in turn, you’ll see an expansion in conversions and revenue."
             
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
