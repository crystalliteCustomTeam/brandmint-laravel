// Components
import { Awards, CallAway, Contact, FAQs, Hero, Package, SeoServiceSteps, Testimonial, VersatileSteps } from "@/components";
import Content from "@/components/Content";
// Media
import HeroImg from "media/whitelableHero.png";
import labelSeo from "media/labelSeo.png";
import whitelabel from "media/whitelabel1.png";
import CallAwayImageWomen from "media/callaway/women.png";

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="White Label SEO Services"
        title="Premium White Label SEO Services Serving Over 250 Different Digital Marketing Companies All Across United States"
        desc="At Jump To 1, we like to create strategic partnerships with like-minded digital marketing companies that focus on providing quality marketing solutions while maintaining profits. We enable digital agencies worldwide to make big bucks while we do the hard work."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] sm:text-[25px] lg:text-[30px] xl:text-[50px] 2xl:text-[50px]"
        spaceBottom="pb-0"
        marqueeCss="pb-[80px] pt-[90px] xs:pt-[50px] sm:pt-[90px]"
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        gridleft="col-span-12 lg:col-span-7"
        gridright="col-span-12 lg:col-span-5"
      />
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Contact />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Package id={1} />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <div className="my-5">
          <Content
            title={"Why Does Your Business Need White Label SEO Services?"}
            desc={
              "A white label SEO collaboration can supply your website with the backlinks, on-page SEO, or content creation strategies necessary to keep serving your customer base for local companies that don't have in-house resources. With Jumpto1, expand your SEO service offerings without employing new SEO staff. Provide larger SEO fulfillments to keep up with your nominees. With our experience and in white-label, we are sure that we'll provide you with result-driven services that will introduce you to your customers in the best possible way."
            }
            img1={labelSeo}
          />
        </div>

        <div className="my-5">
          <Content
            title={"Why Choose Jumpto1 As Your White Label SEO Company?"}
            desc={
              "Jumpto1 is a one-stop store for white label SEO services. We are a full-service white-label platform with a track record of enhancing organic traffic, online authority, and conversions for hundreds of websites from keyword research, content creation, and off-page optimization. We do it all. There is no need to employ an in-house team or concern about negating operational capacity. Our white label SEO services will provide you with the tools to get customers' deliverables. It's time to scale your operations with our pre-packaged white label SEO services that you can add to your company's services and cover your clients' needs."
            }
            img1={whitelabel}
            direction="flex-row-reverse"
          />
        </div>
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <CallAway />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <SeoServiceSteps
          title="8 Ways Your Agency Benefits from <br class='lg:block hidden'/> <span class='text-[#E1183A]'>Our White Label SEO Services</span>"
          description="Our White Label SEO Services Providing the Edge to Your Digital Agency"
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

      <div className="xs:py-[50px] py-[90px] ">
        <VersatileSteps
          title={"Our White-Label SEO Services"}
          desc={'Outrank Your Competition Through Our White Label SEO Company.'}
        />
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
