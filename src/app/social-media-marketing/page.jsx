// Components
import { Awards, CallAway, FAQs, Hero, Package, Testimonial, WhyChooseUs, Platforms, Advertising, Contact } from "@/components"
// Media
import heroImg from "media/socialMediaHero1.png";
import CallAwayImageWomen from "media/callaway/women.png";

export default function Page() {
  return (
    <main>
      <div className="bg-black">
        <Hero
          subTitle="America's Leading Social Media Marketing Company"
          title="Your Business Driven Our Social Media Marketing"
          desc="Jumpto1 Social Media Marketing means more traffic, more calls and more sales! We offer data-driven strategies and surprising bottom-line results to fuel your business growth. Our SMM experts pen such stories that best narrate your BRAND. Let us create the hype for your brand , as we want you to get busy cracking lucrative deals and orders!"
          img={heroImg}
          theme="dark"
          imgCss="absolute bottom-0  right-0 max-w-[60%] xl:max-w-full opacity-20 lg:opacity-100"
          spaceBottom="pb-[150px] sm:pb-[200px] xl:pb-[250px]"
          marqueeCss="relative top-[-70px] z-10"
          titleCss="xs:text-[25px] text-[35px] xl:text-[45px] 2xl:text-[50px]"
        />
      </div>
      <div className="py-[80px]">
        <Awards />
      </div>
      <div>
        <Platforms/>
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <CallAway/>
      </div>
     
      <div className="xs:py-[50px] py-[90px]">
      <WhyChooseUs/>
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Package id={1} />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Testimonial/>
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Advertising/>
      </div>
      
      <div className="xs:py-[50px] py-[90px]">
        <Contact/>
      </div>
      

      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          CallAwayImage={CallAwayImageWomen}
          bg="bg-[#E1183A] rounded-[40px]"
          btnClass="!bg-[#202124] !text-white"
          btnClass2="!bg-white !text-black"
        />
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
