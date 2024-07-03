// Components
import {Awards, CallAway, ComboPackage, Hero, SeoServiceSteps, Testimonial, WhyChooseUs} from "@/components";
import Content from "@/components/Content";
import HeroImg from "media/ecommerceHero.png";
import Ecommerce1 from "media/ecommerce1.png"
import Ecommerce2 from "media/ecommerce2.png"
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
      <div>
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
          items={[
            {
              no: "01",
              title: "Team Of Experts",
              content:
                "When your company becomes more recognized, more quality links will boost. With that, you will require more staff to service your SEO. Hiring then becomes a task that will take up more of your time, which will lead to less work efficiency. At Jumpto1, we provide you with a team of professionals to fulfill your SEO needs.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "02",
              title: "Agency Growth",
              content:
                "With our pre-packaged SEO services, you can add value to your agency's offerings and deliver the work you need for customers. With Jumpto1, there is no requirement to hire an in-house team. Our white label SEO outsourcing will provide you with the resources to get clients' deliverables.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "03",
              title: "Improved SEO Performance",
              content:
                "With our white-hat link-building services, you can track campaign advancement with a brandable SEO dashboard that displays keyword rankings, Google Analytics, and traffic gains. We help you assemble customizable white label SEO reports that you can send directly to customers. All this you can get with our white label SEO company.",
              borderColor: "border-[#34A854]",
            },
            {
              no: "04",
              title: "SEO Tools",
              content:
                "If you prefer in-house SEO, you will require expensive SEO tools, which can be very costly to buy. If you subscribe to our white label SEO services, Jumpto1 has already invested in having these tools, helping our clients save on expenses.",
              borderColor: "border-[#000000]",
            },
            {
              no: "05",
              title: "Quality Backlinks",
              content:
                "Link building demands skills and expertise. Hiring us as a white-label service provider will assure you get high-quality backlinks. Our backlinks will send powerful messages to primary search engines like Google, Yahoo, and Bing that show competence and mastery. With quality backlinks, your website will have higher rankings and attract more potential clients for your business.",
              borderColor: "border-[#F8BA05]",
            },
            {
              no: "06",
              title: "Work Freedom",
              content:
                "The costs associated with White Label SEO are far lower if you work with our white label SEO company that offers you a wholesale cost and the freedom to specify your client markup.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "07",
              title: "Increased revenues",
              content:
                "The tools included in our white label SEO services will help you generate leads. With improved customer satisfaction, you will also be able to predict more reliable clients, which will lead to raised revenues for your digital agency. With our services, you save on expenses and time while improving business efficiency to gain more profit.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "08",
              title: "Experts On Your Side",
              content:
                "It takes years of expertise to advise customers on the best SEO strategies. And because search engines are constantly changing, it's not something you can understand once and move on from. At Jumpto1, we optimize your clients' websites and execute an efficient SEO strategy as a full-time job.",
              borderColor: "border-[#34A854]",
            },
          ]}
        />
      </div>
    </main>
  );
}
