// Components
import { Awards, CallAway, ComboPackage, Contact, FAQs, Hero, Package, Platforms, SmmServices, Testimonial } from "@/components";
import HeroImg from "media/seoservicesHero.png";
import CallAwayImageWomen from "media/callaway/women.png";
import SeoSteps from "@/components/SeoSteps";

import one from "media/seo-services-hurdles/1.png";
import two from "media/seo-services-hurdles/2.png";
import three from "media/seo-services-hurdles/3.png";
import four from "media/seo-services-hurdles/4.png";
import five from "media/seo-services-hurdles/5.png";
import six from "media/seo-services-hurdles/6.png";

import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";

export default function Page() {
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
  return (
    <main>
      <Hero
        subTitle="Professional Search Engine Optimization Services"
        title="Rank Your Website On  Top With Our SEO Services"
        desc="Elevate your online presence with our expert SEO services. As a leading SEO agency, we deliver tailored strategies to propel your website to the top of search rankings."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] text-[45px] md:text-[35px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]"
        spaceBottom="pb-0"
        marqueeCss="pb-[40px]  xs:pt-[50px] sm:pt-[50px]"
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
      />
      <div className="xs:py-[50px] md:py-[80px]">
        <Awards />
      </div>
      <div>
        <Platforms variant={"logo"}
          title={`How Our SEO Services <br class='hidden sm:block' />
                        Drive More Leads For Your Business?`}
          desc={`Our best SEO services boost your visibility, attracting targeted traffic and converting
             visitors into valuable leads. As a top-tier SEO company, we optimize your online presence 
             to fuel sustainable business growth and maximize ROI.`}
          images={
            [
              one,
              two,
              three,
              four,
              five,
              six,
            ]
          }
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Package id={1} desc="As the #1 SEO Company, we deliver cost-effective strategies that outperform your competitors. Our data-driven approach ensures maximum impact on your search rankings, driving traffic and success without draining your budget." />
      </div>
      <div>
        <ComboPackage />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <SmmServices
          title={`Professional SEO Services That <br class="hidden sm:block"/> Grows Your Business`}
          desc={`As the #1 SEO Company, we deliver cost-effective strategies that outperform your competitors. Our data-driven approach <br class="hidden lg:block'"/> ensures maximum impact on your search rankings, driving traffic and success without draining your budget.`}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial data={dataTest} />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Contact title={`Get your <strong>free 30 minutes </strong>strategy<br class="hidden sm:block"/>
            session with Our Professional<br class="hidden sm:block"/>
            SEO Expert valued at<br class="hidden sm:block"/>
            <strong> $300 USD.</strong>`} />
      </div>

      <div >
        <SeoSteps
          title={`Our 6 Step SEO Process That Makes Sure That Your <br class="2xl:block hidden" /> Website Ranks On Top Of SERP!`} />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <CallAway CallAwayImage={CallAwayImageWomen} desc={`Ready to skyrocket your online presence? Our proven SEO strategies will propel your website to <br class="2xl:block hidden" /> the top of search results. Don't let competitors outrank you – Hire SEO company today!`} bg="bg-[#E1183A] rounded-[40px]" btnClass="!bg-[#202124] !text-white" btnClass2="!bg-white !text-black" />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <FAQs
          items={[
            {
              title: "How long does SEO take to see results?",
              content: "SEO typically takes time to yield noticeable results, often several months depending on various factors such as competition, industry, and current website status."
            },
            {
              title: "What is included in on-page SEO services?",
              content: "On-page SEO services encompass optimizing web content, meta tags, headings, and internal links to enhance search engine rankings and user experience."
            },
            {
              title: "Why is SEO crucial for your business?",
              content: "SEO is crucial for your business as it boosts online visibility, drives organic traffic, and enhances credibility and conversions."
            },
            {
              title: "How does SEO Company execute its SEO service delivery?",
              content: "SEO Company implements its SEO services through comprehensive strategies, including keyword research, content optimization, technical SEO, and ongoing adjustments."
            },
            {
              title: "What are the benefits of partnering with us?",
              content: "Partnering with us provides access to top-tier White Label SEO services, ensuring effective solutions for your clients without the need for in-house expertise."
            },
            {
              title: "Why is SEO important for your business?",
              content: "SEO is essential for maintaining online visibility, attracting potential customers, and remaining competitive in today's digital scene."
            }
          ]
          }
        />
      </div>
    </main>
  );
}
