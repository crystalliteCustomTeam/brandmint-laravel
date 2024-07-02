// Components
import {Awards, CallAway, ComboPackage, Contact, FAQs, Hero, SeoServiceSteps, Testimonial, WhyChooseUs} from "@/components";
import Content from "@/components/Content";
import HeroImg from "media/ecommerceHero.png";
import Ecommerce1 from "media/ecommerce1.png";
import Ecommerce2 from "media/ecommerce2.png";
export default function Page() {
  return (
    <main>
      <Hero
        subTitle="Our eCommerce SEO Services"
        title="Driving Qualified Traffic To Your Online Store!"
        desc="We provide eCommerce website marketing strategies aimed at helping companies supercharge their online campaigns and attract more buyers. Partner with Jumpto1 and let us help you drive in more revenue to your eCommerce store. The more keywords you’re able to target successfully, the more qualified buyers will click on your products, and in turn, you’ll see an expansion in conversions and revenue."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] sm:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px]"
        spaceBottom="pb-0"
        marqueeCss="py-[80px] md:pb-[100px] "
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
      />
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial />
      </div>
      <div className="xs:py-[50px] py-[90px] bg-[#0085F8]">
        <ComboPackage />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <WhyChooseUs />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <div className="my-5">
          <Content
            title={"Why Do Ecommerce Businesses Need SEO To Build Brand Awareness?"}
            desc={
              "Work Hard, Market Harder! Even though SEO has the highest ROI from other eCommerce marketing campaigns, surprisingly, most eCommerce stores are still put together with little to no regard for search engines. Instead, most brands rely on social media marketing or other paid ads, which are tremendous but can't compete with the SEO conversion rate.<br/> <br/> SEO helps your eCommerce store increase its ROI and grow. With our eCommerce SEO services and experienced team, your products will rank higher in search results for the keywords your target demographics use. SEO only requires onetime effort because you basically make sales on autopilot with no regular expense once you rank."
            }
            img1={Ecommerce1}
          />
        </div>

        <div className="my-5">
          <Content
            title={"Why Is Ecommerce Marketing Necessary For Your Business?"}
            desc={
              "If your store is already online, that's great. However, you risk staying invisible to new opportunities and possible leads if you don't take bold steps to increase your online visibility. Jumpto1 is a full-service digital marketing company that's sincere about what we do — and it shows in our associations with successful eCommerce companies from different industries. Our eCommerce search engine optimization strategies aim to help your online store punch above its weight and dominate the competition. Our eCommerce SEO services include keyword research, product markup, content promotion,eCommerce SEO strategy, and online product management."
            }
            img1={Ecommerce2}
            direction="flex-row-reverse"
          />
        </div>
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <CallAway />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <SeoServiceSteps
          title="Why Choose Jumpto1 For  <span class='text-[#E1183A]'> eCommerce <br class='lg:block hidden'/> SEO Services ?</span>"
          description="eCommerce is here to dominate! Leverage Jumpto1 to your advantage and surpass the online competition by delivering the finest <br class='xl:block hidden'/> customer experience. Our eCommerce SEO marketing company brings a set of wholesomeness to your business arena."
          items={[
            {
              no: "01",
              title: "Boost Your <br class='lg:block hidden'/> Business Efficiency",
              content:
                "With the help of Jumpto1 SEO marketing for an eCommerce company, you can successfully mount your business, improve your product ranges and eliminate repetitive tasks. eCommerce digital marketing permits you to execute data-driven strategies that align with your eCommerce marketing goals. We Position your brand in front of potential buyers and generate loyal customers. Jumpto1 eCommerce SEO marketing covers a variety of online solutions, including SEO, social media brand management, and keyword research and optimization.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "02",
              title: "Strengthen Your Online Foundation rack Record",
              content:
                "Our profitable digital marketing campaigns throughout the years reflect Jumpto1's exceptional portfolio. Through our passion for creation and dedication to supporting our clients, we are confident that we will bring you the best eCommerce SEO services for your online store.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "03",
              title: "Client-Focused Approach",
              content:
                "At Jumpto1, we appreciate your goals and put them above everything else. Our eCommerce SEO experts ensure everyone is on board when handling our clients' projects. You are always welcome to discuss your goals and share your ideas with our account managers.",
              borderColor: "border-[#34A854]",
            },
            {
              no: "04",
              title: "We Value Honesty",
              content:
                "If you prefer in-house SEO, you will require expensive SEO tools, which can be very costly to buy. If you subscribe to our white label SEO services, Jumpto1 has already invested in having these tools, helping our clients save on expenses.",
              borderColor: "border-[#000000]",
            },
          ]}
        />
        <div className="xs:py-[50px] py-[90px]">
          <Contact />
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
      </div>
    </main>
  );
}
