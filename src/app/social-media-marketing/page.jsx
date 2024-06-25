// Components
import { Awards, Hero } from "@/components"
// Media
import heroImg from 'media/socialMediaHero.png'

export default function page() {
    return (
        <main>
            <div className="bg-black">
                <Hero
                    subTitle="America's Leading Social Media Marketing Company"
                    title="Your Business Driven Our Social Media Marketing"
                    desc="Jumpto1 Social Media Marketing means more traffic, more calls and more sales! We offer data-driven strategies and surprising bottom-line results to fuel your business growth. Our SMM experts pen such stories that best narrate your BRAND. Let us create the hype for your brand , as we want you to get busy cracking lucrative deals and orders!"
                    img={heroImg}
                    theme="dark"
                    imgCss="absolute bottom-0 -z-10 right-0 max-w-[60%] xl:max-w-full opacity-20 lg:opacity-100"
                    spaceBottom="pb-[150px] sm:pb-[200px] xl:pb-[250px]"
                    marqueeCss="relative top-[-70px] z-10"
                    titleCss="xs:text-[25px] text-[35px] xl:text-[45px] 2xl:text-[50px]"
                />
            </div>
            <Awards />
        </main>
    )
}