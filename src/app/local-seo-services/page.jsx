// Components
import {Awards, CallAway, FAQs, Hero, Package, Testimonial, WhyChoose} from "@/components";
import Content from "@/components/Content";
// Media
import HeroImg from "media/localseoservicesHero.png";
import seoImg from "media/local-seo-service/seo.png";
import BusinessSeoImg from "media/local-seo-service/business-seo.png";
import qualityLeadsImg from "media/local-seo-service/qualityLeads.png";
import CallAwayImageMen from "media/callaway/menLaptop.png";
import CallAwayImageWomen from "media/callaway/women.png";

// Why Choose Section Data
const chooseData = [
  ["/social-media-marketing/speech-bubble.png", "Clear <br/> Communication", "We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication."],
  [
    "/social-media-marketing/customer-centric-approch.png",
    "Customer-Centric <br/> Approch",
    "We prioritize our client's success, understand your unique needs, and deliver tailored solutions that drive your",
  ],
  ["/social-media-marketing/great-idea.png", "Innovation and <br/> Excellence", "We consistently deliver innovative, highquality solutions as a team on the cutting edge of technology trends."],
];

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="Our Local SEO Services"
        title="Driving Qualified Traffic To Your Business!"
        desc="By harnessing the power of nationwide SEO, Jumpto1 creates digital solutions that challenge the highly-saturated marketplace and help you win new clients across the nation. Now you can target customers in every state, every region without the fear of any geographical confinement."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] sm:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px]"
        spaceBottom="pb-0"
        marqueeCss="pb-[80px] xs:pt-[50px] sm:pt-[50px]"
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
      />
      <div className="xs:py-[50px] py-[90px]">
        <Package id={1} />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <WhyChoose />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <Content
          title="What Are Local SEO <br/> Services Basically?"
          desc="Local SEO Services is a digital marketing process that deals with optimizing the website to improve its local search visibility. Sounds technical? Let’s talk about the process in a more layman's language.
            <br/><br/>
            What if we say you are already familiar with Local SEO? Yes, you are.  
            <br/><br/>
            Let us ask you a question. What do you do when you crave pizza? Obviously, you pick up your mobile phone and check what nearby pizza shop is available to satisfy your cravings. What did you just enter? Was it “pizza near me”? If yes, the shops that appear in the search results are the ones that have Local SEO done on their online profiles."
          img1={seoImg}
        />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <Content
          title="Why Does Your Business <br/> Need Local SEO Services?"
          desc="Because 93% whopping U.S buyers search for local businesses online, in which 88% of the searches are made from mobile. Not to mention, 72% of those consumers end up visiting a store with phone calls within 24 hours of their searches.
        <br/><br/>
            These statistics show how important it is to have local SEO done for businesses. No matter what you offer and how aged your business is, it is useless unless it doesn't appear in front of the target audience. With millions and trillions of high-intent customers doing online searches for a local business every day and needing digital powers to support their brand transactions, investing in the best local SEO services becomes instrumental."
          img1={BusinessSeoImg}
          direction="flex-row-reverse"
        />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <Content
          title="What Goes Into Local SEO That Drives Quality Leads To Your Website?"
          desc="Many attributes go into the process of creating a successful local SEO strategy for making the brand recognizable. It starts with devising a marketing strategy where lead generation and local SEO services hold a prominent position. It goes unsaid that lead generation serves as the lifeblood of any business. Without a steady stream of quality leads, firms of all shapes and sizes toil to make sales and grow. And, let alone local SEO acts as a funnel attracting prospects to your business."
          img1={qualityLeadsImg}
        />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <CallAway />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <CallAway CallAwayImage={CallAwayImageWomen} bg="bg-[#E1183A] rounded-[40px]" btnClass="!bg-[#202124] !text-white" btnClass2="!bg-white !text-black" />
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
  );
}
