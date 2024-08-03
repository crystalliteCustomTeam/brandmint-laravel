
// Components
import { Awards, Hero, CallAway, Testimonial, Industries, SeoGraph, UsaCities, ServicesTabs, Strategies, Header,FAQs, UkCities, Contact, Advertising } from "@/components"
// Media
import heroBG from 'media/horsebg.png'
import CallAwayImageMen from "media/callaway/menLaptop.png"
import CallAwayImageWomen from "media/callaway/women.png"

// Testimonial Data

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="UK's Leading Digital Marketing Company"
        title="Dominate The SERP Ranks By Hiring Our SEO Company."
        desc="As a leading SEO Agency, we offer sweeping SEO strategies to boost your online success. Our team excels in keyword research, content optimization, and link-building, delivering exceptional results. Trust us, as the top SEO Firm, to provide advanced, and goal-focused SEO services that help your business thrive in the digital age with SEO Company as your partner."
        bg={heroBG}
        marqueeCss="absolute bottom-[100px] left-0 right-0"
        spaceBottom="pb-[300px]"
        flag="uk"
      />
      <div className=" xs:py-[50px] py-[90px]">
        <Awards/>
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <ServicesTabs />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="Achieve More with Our SEO Firm!"
          desc="Need expert digital marketing help? We are here for you. We are the #1 SEO company, providing a complete digital marketing solution for your business."
          CallAwayImage={CallAwayImageMen}
          // Banner={BannerBlue}
          bg = "bg-gradient-to-t from-[#202124] to-[#000E2A] rounded-[40px]"
          btnClass="!bg-[#EC4139] !text-white"
          btnClass2="!bg-white !text-black"
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Strategies />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <SeoGraph />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial
          title="What Makes Us #1?"
          desc="See Real Client Reviews"
          gridsClasses="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
          bgClass="bg-transparent border-[1px] shadow-lg rounded-[15px]"
         
        />
      </div>
      

      <div className="xs:py-[50px] py-[90px]">
        <Industries
          title="Industries We Proudly Serve"
          desc="No matter the NATURE or SCALE of your business, enhance your online value with our assistance!"
        />
      </div>
      <div  className="xs:py-[50px] py-[90px]">
            <Contact/>
        </div>
    
      
      
      <div className="xs:py-[50px] py-[90px]">
        <UkCities />
      </div>
      
        

      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="SEO Company Awaits Your Signal!"
          desc="Lucky for you, our professional SEO services are here to dominate your online business presence. Forget SEO frustration. We’re your one-stop shop where all your SEO challenges meet their match with our expert solutions."
          CallAwayImage={CallAwayImageWomen}
          bg= "bg-[#E1183A] rounded-[40px]"
          btnClass="!bg-[#202124] !text-white"
          btnClass2="!bg-white !text-black"
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
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
