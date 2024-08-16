
// Components
import { Awards, Hero, CallAway, Testimonial, Industries, SeoGraph, UsaCities, ServicesTabs, Strategies, Header, FAQs, Contact, BoxReveal, AnimatedList } from "@/components"
// Media
import heroBG from 'media/horsebg.png'

import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";

import CallAwayImageWomen from "media/callaway/women.png"


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
        subTitle="America's Leading Digital Marketing Company"
        title="Hire The Best <br class='hidden lg:block' /> SEO Company "
        desc="As a leading SEO Agency, we offer sweeping SEO strategies to boost your online success. Our team excels in keyword research, content optimization, and link-building, delivering exceptional results. "
        bg={heroBG}
        marqueeCss="absolute bottom-[100px] left-0 right-0"
        spaceBottom="pb-[300px]"
        headerlogo={true}
      />
      <div className=" xs:py-[50px] py-[70px]">
        <Awards />
      </div>
      <div className="xs:py-[50px] py-[70px]">
        <ServicesTabs />
      </div>
      <div className="xs:py-[50px] py-[70px]">
        <CallAway />
      </div>
      <div className="xs:py-[50px] py-[70px]">
        <Strategies />
      </div>
      <div className="xs:py-[50px] py-[70px]">
        <SeoGraph />
      </div>
      <div className="xs:py-[50px] py-[70px]">
        <Testimonial data={dataTest} />
      </div>


      <div className="xs:py-[50px] py-[70px]">
        <Industries />
      </div>
      <div className="xs:py-[50px] py-[70px]">
        <Contact />
      </div>
      <div className="xs:py-[50px] py-[70px]">
        <UsaCities />
      </div>

      <div className="xs:py-[50px] py-[70px] sm:!px-[10px]">
        <CallAway
          title="SEO Company Awaits <br class='lg:block md:hidden sm:block hidden'> Your Signal!"
          desc="Lucky for you, our professional SEO services are here to dominate your online business presence. We’re your one-stop shop where all your SEO challenges meet their match with our expert solutions."
          CallAwayImage={CallAwayImageWomen}
          bg="bg-[#E1183A] rounded-[40px]"
          btnClass="!bg-[#202124] !text-white"
          btnClass2="!bg-white !text-black"
          btnText2="Call Us Now!"
          titleClass="!text-[24px] sm:!text-[32px]  lg:!text-[40px] xl:!text-[45px] 2xl:!text-[50px]"
        />
      </div>

      <div className="xs:py-[50px] py-[30px]">
        <FAQs items={[
          {
            title: "How long does it usually take for your SEO services to start paying off?  ",
            content: "SEO results take 3 to 6 months to see tangible results, depending on industry competitiveness, website state, and strategies implemented."
          },
          {
            title: "Is it possible to combine your SEO services with other online marketing initiatives?",
            content: "Our SEO services are designed to integrate with your digital marketing plan, including PPC advertising, email marketing, and content marketing, ensuring a consistent online presence."
          },
          {
            title: "What makes your company the best choice for SEO services?",
            content: "Our unique SEO strategy, market knowledge, and commitment to ethical methods set us apart, making us a top choice in the industry for performance and client satisfaction."
          },
          {
            title: "What level of assistance is expected during an SEO campaign?",
            content: "You can count on diligent assistance throughout your SEO campaign. Our team is accessible to answer any concerns, make modifications, and provide direction to ensure that our SEO techniques meet your business objectives."
          },
          {
            title: "How do you handle changes in SEO trends and algorithms?",
            content: "Our team adapts strategies based on the latest SEO trends and Google algorithm changes, ensuring your site's ranking remains high despite the dynamic nature of SEO."
          },
          {
            title: "How do you report on SEO progress and results?",
            content: "We provide monthly reports that detail key performance indicators like rankings, traffic statistics, and conversion rates. These reports also include insights and recommendations for ongoing improvements."
          }
        ]} />
      </div>

    </main>
  )
}
