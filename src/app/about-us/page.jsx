// Components
import { AboutProcess, CallAway, Contact, FAQs, Hero, Package, Testimonial } from "@/components";
import AboutUsEcommerceVersatileSteps from "@/components/AboutUsVersatileSteps";
// Media
import HeroImg from "media/about-us.png";

import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";

const dataTest = [
    {
        shadowColor: "bg-[#4E81EC]",
        review: "SEO Company has completely transformed our online presence. Their advanced SEO tactics have boosted our website's traffic and increased our conversions immensely. Their expertise in keyword research, content optimization, and link-building is unmatched. Highly recommend their services!",
        testimonialImage: philip,
        testimonialName: "Philip",
    },
    {
        shadowColor: "bg-[#E1183A]",
        review: "SEO Company has been a game-changer. Their all-around SEO strategies helped us rank higher on search engines and attract more visitors. Their team is super knowledgeable and always ready to help. Five stars!",
        testimonialImage: chris,
        testimonialName: "Chris",
    },
    {
        shadowColor: "bg-[#F5C228]",
        review: "If you're looking for professional SEO services that deliver real results, SEO Company is your place to go. Their advanced SEO tactics and commitment to understanding our business have propelled us to the top of search results. Their team is amazing, and their services are worth every penny.",
        testimonialImage: bilal,
        testimonialName: "Bilal",
    },
    {
        shadowColor: "bg-[#24BF5A]",
        review: "I can't say enough good things about SEO Company. Their SEO strategies are well-planned, and work wonders for our search rankings. Their monthly updates keep us informed and confident. Highly recommended!",
        testimonialImage: elissa,
        testimonialName: "Elissa Kidarshan",
    },
    {
        shadowColor: "bg-[#4E81EC]",
        review: "If you want SEO services that really work, go with SEO Company. Their advanced SEO tactics and deep understanding of our business got us to the top of search results. Their team is awesome, and their services are worth every penny.",
        testimonialImage: joe,
        testimonialName: "Joe Francis",
    },
    {
        shadowColor: "bg-[#F5C228]",
        review: "SEO Company has a proven success record, and we’ve seen it ourselves. Their custom SEO plans helped us reach our target audience better, and their ongoing support ensures we keep growing. They're the best SEO firm out there.",
        testimonialImage: moses,
        testimonialName: "Moses",
    },
];

export default function Page() {
    return (
        <main>
            <Hero
                subTitle="About Us"
                title="SEO Company That Drives Measurable Results"
                desc="Our SEO Solutions Help Businesses Succeed and Dominate the Digital Landscape"
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss="xs:text-[25px] sm:text-[35px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px]"
                spaceBottom="pb-0"
                marqueeCss="pb-[80px] md:pt-[80px] xs:pt-[50px] sm:pt-[90px]"
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
                gridleft="col-span-12 lg:col-span-8"
                gridright="col-span-12 lg:col-span-4"
            />
            <div className="xs:py-[50px] py-[90px]">
                <Testimonial data={dataTest} />
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <AboutUsEcommerceVersatileSteps />
            </div>
            <div>
                <AboutProcess />
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <CallAway />
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <Package id={1} />
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <Contact />
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <FAQs
                    items={[
                        {
                            title: "How long does SEO take to see results?",
                            content:
                                "SEO typically takes time to yield noticeable results, often several months depending on various factors such as competition, industry, and current website status.",
                        },
                        {
                            title: "What is included in on-page SEO services?",
                            content:
                                "On-page SEO services encompass optimizing web content, meta tags, headings, and internal links to enhance search engine rankings and user experience.",
                        },
                        {
                            title: "Why is SEO crucial for your business?",
                            content:
                                "SEO is crucial for your business as it boosts online visibility, drives organic traffic, and enhances credibility and conversions",
                        },
                        {
                            title: "How does SEO Company execute its SEO service delivery?",
                            content:
                                "SEO Company implements its SEO services through comprehensive strategies, including keyword research, content optimization, technical SEO, and ongoing adjustments.",
                        },
                        {
                            title: "What are the benefits of partnering with us?",
                            content:
                                "Partnering with us provides access to top-tier White Label SEO services, ensuring effective solutions for your clients without the need for in-house expertise.",
                        },
                        {
                            title: "Why is SEO important for your business?",
                            content:
                                "SEO is essential for maintaining online visibility, attracting potential customers, and remaining competitive in today's digital scene.",
                        },
                    ]}
                />
            </div>
        </main>
    )
}
