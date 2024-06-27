// Components
import {Awards, Hero} from "@/components";
import Content from "@/components/Content";
// Media
import HeroImg from "media/localseoservicesHero.png";
import seoImg from "media/local-seo-service/seo.png";
import BusinessSeoImg from "media/local-seo-service/business-seo.png";
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
        <Awards />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Content
          title="What Are Local SEO <br/> Services Basically?"
          desc="Local SEO Services is a digital marketing process that deals with optimizing the website to improve its local search visibility. Sounds technical? Let’s talk about the process in a more layman's language.
            <br/><br/>
            What if we say you are already familiar with Local SEO? Yes, you are.  
            <br/><br/>
            Let us ask you a question. What do you do when you crave pizza? Obviously, you pick up your mobile phone and check what nearby pizza shop is available to satisfy your cravings. What did you just enter? Was it “pizza near me”? If yes, the shops that appear in the search results are the ones that have Local SEO done on their online profiles."
          img1={seoImg}
          direction=""
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Content
          title="Why Does Your Business <br/> Need Local SEO Services?"
          desc="Because 93% whopping U.S buyers search for local businesses online, in which 88% of the searches are made from mobile. Not to mention, 72% of those consumers end up visiting a store with phone calls within 24 hours of their searches.
        <br/><br/>
            These statistics show how important it is to have local SEO done for businesses. No matter what you offer and how aged your business is, it is useless unless it doesn't appear in front of the target audience. With millions and trillions of high-intent customers doing online searches for a local business every day and needing digital powers to support their brand transactions, investing in the best local SEO services becomes instrumental."
          img1={BusinessSeoImg}
          direction="flex-row-reverse"
        />
      </div>
    </main>
  );
}
