// Components
import { AboutProcess,CallAway, Contact, FAQs, Hero, Package, Testimonial} from "@/components";
// Media
import HeroImg from "media/about-us.png";

export default function Page() {
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
                marqueeCss="pb-[80px] md:pt-[80px] xs:pt-[50px] sm:pt-[90px]"
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
                gridleft="col-span-12 lg:col-span-8"
                gridright="col-span-12 lg:col-span-4"
            />
            <div className="xs:py-[50px] py-[90px]">
                <Testimonial/>
            </div>
            <div>
                <AboutProcess/>
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <CallAway/>
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <Package id={1}/>
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <Contact/>
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <FAQs
                    items={[
                        {
                          title: "How long does SEO take to generate results?",
                          content:
                            "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                        {
                          title: "What Includes In on page SEO services?",
                          content:
                            "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                        {
                          title: "Why is SEO important for your business?",
                          content:
                            "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                        {
                          title: "How Does Jumpto1 Carry Its SEO service delivery?",
                          content:
                            "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                        {
                          title: "Why Should You Partner With Us?",
                          content:
                            "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                        {
                          title: "Why is SEO important for your business?",
                          content:
                            "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                      ]}
                />
            </div>
        </main>
    )
}
