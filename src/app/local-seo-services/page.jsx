// Components
import {Awards, CallAway, FAQs, Hero, Package, SeoServiceSteps, Testimonial, WhyChooseUs} from "@/components";
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
        title="Driving Qualified Traffic <br class='lg:block hidden'/> To Your Business!"
        desc="By harnessing the power of nationwide SEO, Jumpto1 creates digital solutions that challenge the highly-saturated marketplace and help you win new clients across the nation. Now you can target customers in every state, every region without the fear of any geographical confinement."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] text-[45px] md:text-[35px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]"
        spaceBottom="pb-0"
        marqueeCss="pb-[80px] xs:pt-[50px] sm:pt-[50px]"
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        gridleft="col-span-12 lg:col-span-7"
        gridright="col-span-12 lg:col-span-5"
      />
      <div className="xs:py-[50px] py-[90px]">
        <Package id={1} />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <WhyChooseUs />
      </div>
      <div className="xs:py-[30px] md:py-[50px]">
        <div className="my-5">
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
        <div className="my-5">
          <Content
            title="Why Does Your Business <br/> Need Local SEO Services?"
            desc="Because 93% whopping U.S buyers search for local businesses online, in which 88% of the searches are made from mobile. Not to mention, 72% of those consumers end up visiting a store with phone calls within 24 hours of their searches.
        <br/><br/>
            These statistics show how important it is to have local SEO done for businesses. No matter what you offer and how aged your business is, it is useless unless it doesn't appear in front of the target audience. With millions and trillions of high-intent customers doing online searches for a local business every day and needing digital powers to support their brand transactions, investing in the best local SEO services becomes instrumental."
            img1={BusinessSeoImg}
            direction="flex-row-reverse"
          />
        </div>
        <div className="my-5">
          <Content
            title="What Goes Into Local SEO That Drives Quality Leads To Your Website?"
            desc="Many attributes go into the process of creating a successful local SEO strategy for making the brand recognizable. It starts with devising a marketing strategy where lead generation and local SEO services hold a prominent position. It goes unsaid that lead generation serves as the lifeblood of any business. Without a steady stream of quality leads, firms of all shapes and sizes toil to make sales and grow. And, let alone local SEO acts as a funnel attracting prospects to your business."
            img1={qualityLeadsImg}
          />
        </div>
      </div>

      <div className="xs:py-[50px] py-[60px]">
        <CallAway />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <SeoServiceSteps
          items={[
            {
              no: "01",
              title: "Local SEO Audit",
              content:
                "Our local SEO Company conducts an exhaustive local SEO audit to define your existing local SEO ranking, acquire actionable insights and make your local SEO checklist. Jumpto1 checks your NAP visibility, determines your geographical area and service zones, and investigates your Google My Business listing. To achieve your local SEO strategy, our local SEO specialists also execute a Google My Business page audit, examine analysis, audit the landing page, analyze local citations, opponent benchmarking, and analyze organic links.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "02",
              title: "Keyword Research & Strategy",
              content:
                "We conduct extensive keyword investigation and analysis to recognize geo-specific, industry-corresponding keywords and categorize them by search intent. Once Jumpto1’s local SEO specialist has outlined your search terms, he makes a local SEO manual to help you devise locally-centric website content.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "03",
              title: "On-Page Optimization",
              content:
                "We source on-page optimization to make sure your site ranks high in your target area. Our SEO experts optimize metadata and homepage of your website with geo-specific keywords and develop city, service, and industry pages, establish social media cues and enforce local SEO best practices on your website. We apply local business schema to website pages to make it more effortless for search engines to comprehend your brand offerings and target locations.",
              borderColor: "border-[#34A854]",
            },
            {
              no: "04",
              title: "Link Building",
              content:
                "We ensures search engines discover an authentic manifestation of your business across the web. We create hyperlocal SEO landing pages, construct your local SEO citations, powers keywords with high domain relevancy, and project email outreach movements. We pursue local link-building and GMB SEO best techniques to draw links that produce the results for your company.",
              borderColor: "border-[#000000]",
            },
            {
              no: "05",
              title: "Business Citation Management",
              content:
                "Local SEO citations serve as an authority for your company name and address on another website. Jumpto1’s Google My Business specialists leverage high-end third-party sites to create local citations for your enterprise. We also explore industry-based niche directories and advance your business information to acquire the maximum authority of your online presence.",
              borderColor: "border-[#F8BA05]",
            },
            {
              no: "06",
              title: "Online Reputation Management (ORM)",
              content:
                "Online reviews can deliver favorable evidence about your company and help improve customer trust. According to studies, 88 percent of customers check online reviews before buying local services. We protect your brand prestige by monitoring the customers' mentions across many sites.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "07",
              title: "Content Writing",
              content:
                "With a team of expert writers, we create well-researched and optimized content. They closely follow the local SEO guidelines to curate content that ranks high on the search engines. We help you become friends with your ideal customers with appealing and relevant titles and headlines.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "08",
              title: "Conversion Rate Optimization (CRO)",
              content:
                "We take a deeper look at your website to learn the elements that hinder the users from getting converted. With our CRO specialists, we ensure your website gets optimized to the level of finesse.",
              borderColor: "border-[#34A854]",
            },
            {
              no: "09",
              title: "Nextdoor Local Business Advertising",
              content:
                "We local search services concentrate on creating your Nextdoor prestige and community. Our SEO experts optimize your Nextdoor company profile, interact with your local community, confirm your brand details are valid and monitor your campaign metrics. These local SEO keys permit us to identify areas you can enhance your reputations and conduct critical actions to associate your brand with the individuals in your target places.",
              borderColor: "border-[#000000]",
            },
            {
              no: "10",
              title: "Mobile Responsive Design",
              content:
                "We conduct business the right way! We are Known for its two core values: Integrity and Results. We take satisfaction in what we do and always strive for excellence with total honesty and integrity.",
              borderColor: "border-[#F8BA05]",
            },
          ]}
        />
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
