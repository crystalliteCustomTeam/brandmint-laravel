// Components
import {CallAway, Contact, FAQs, Hero, Package, Testimonial} from "@/components";
import Content from "@/components/Content";
// Media
import HeroImg from "media/googleservicesHero.png";
import GoogleService1 from "media/google-services1.png";
import GoogleService2 from "media/google-services2.png";
import GoogleService3 from "media/google-services3.png";
import GoogleServices from "@/components/GoogleServices";
export default function Page() {
  return (
    <main>
      <Hero
        subTitle="Google Services"
        title="Get Sales-Ready Leads and Enjoy Quantifiable Results with Our Google Local Services"
        desc="Don’t you want your Google My Business listing to outrank your competitors? Our GMB listing optimization services have got you covered. If you have a GMB listing but are witnessing no noticeable results, we are here to give your profile the boost it deserves. "
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] sm:text-[30px] lg:text-[38px] xl:text-[45px] 2xl:text-[50px]"
        spaceBottom="pb-0"
        marqueeCss="py-[80px] md:pb-[100px] "
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        gridleft="col-span-12 lg:col-span-7"
        gridright="col-span-12 lg:col-span-5"
      />
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <GoogleServices/>
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <Content
          title="Give Your Ideal Customers <br class='xl:block hidden'/> A True Snapshot Of Your Business With GMB Optimization Services!"
          desc="Don’t you want your Google My Business listing to outrank your competitors? Our GMB listing optimization services have got you covered. If you have a GMB listing but are witnessing no noticeable results, we are here to give your profile the boost it deserves. With us, get ready to see yourself on the top of the local pack, that too at the most sensible rates ever! <br/><br/> For Improved rankings, Boosted listings, and better Maps Optimization, we are the marketing intelligence you need. So, what are you waiting for?<br/>
            Give us a call and leave your GMB troubles to Jumpto1."
          img1={GoogleService1}
        />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <Content
          title="Get Sales-Ready Leads <br class='xl:block hidden'/> And Enjoy Quantifiable Results With Our Google Local Services"
          desc="Who Says Leads Are Hard To Capture? With Google Local Services, It Is Easy Than Ever!"
          direction="flex-row-reverse"
          img1={GoogleService2}
        />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <Content
          title="Give Your Customers The <br class='xl:block hidden'/> Confidence In Your Services With Our Google Screened Services!"
          desc="It's now easy to earn customers' trust with Google Badges, which conveys credibility right in front of motivated clients!"
          img1={GoogleService3}
        />
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
