import {Contact, FAQs,Hero, IndustriesGrid} from "@/components";

import HeroImg from "media/about-us.png";
export default function Page() {
  return (
    <>
      <Hero
        // subTitle="About Us"
        title="Industries <br class='xl:block hidden'/> We Proudly Serve"
        desc="No matter the NATURE or SCALE of your business, enhance your <br class='xl:block hidden'/> online value with our assistance!"
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[25px] sm:text-[35px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px]"
        spaceBottom="pb-0"
        marqueeCss="pb-[80px] md:pt-[80px] xs:pt-[50px] sm:pt-[90px]"
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        gridleft="col-span-12 lg:col-span-8"
        gridright="col-span-12 lg:col-span-4"
      />
       <div className="md:py-[70px] py-[50px]">
      <IndustriesGrid />
      </div>
      <div className="md:py-[70px] py-[50px]">
        <Contact />
      </div>
      <div className="xs:py-[50px] py-[30px]">
        <FAQs
          items={[
            {
              title: "How long does it usually take for your SEO services to start paying off?  ",
              content: "SEO results take 3 to 6 months to see tangible results, depending on industry competitiveness, website state, and strategies implemented.",
            },
            {
              title: "Is it possible to combine your SEO services with other online marketing initiatives?",
              content:
                "Our SEO services are designed to integrate with your digital marketing plan, including PPC advertising, email marketing, and content marketing, ensuring a consistent online presence.",
            },
            {
              title: "What makes your company the best choice for SEO services?",
              content: "Our unique SEO strategy, market knowledge, and commitment to ethical methods set us apart, making us a top choice in the industry for performance and client satisfaction.",
            },
            {
              title: "What level of assistance is expected during an SEO campaign?",
              content:
                "You can count on diligent assistance throughout your SEO campaign. Our team is accessible to answer any concerns, make modifications, and provide direction to ensure that our SEO techniques meet your business objectives.",
            },
            {
              title: "How do you handle changes in SEO trends and algorithms?",
              content: "Our team adapts strategies based on the latest SEO trends and Google algorithm changes, ensuring your site's ranking remains high despite the dynamic nature of SEO.",
            },
            {
              title: "How do you report on SEO progress and results?",
              content:
                "We provide monthly reports that detail key performance indicators like rankings, traffic statistics, and conversion rates. These reports also include insights and recommendations for ongoing improvements.",
            },
          ]}
        />
      </div>
    </>
  );
}
